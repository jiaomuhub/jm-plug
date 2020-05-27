<template>
    <div class="marquee">
        <div class="marquee_box">
            <ul class="marquee_list"
                :class="{marquee_top:animate}">
                <li v-for="(item,index) in marqueeList">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'JmMarquee',
    data() {
        return {
            animate: false
        }
    },
    created() {
        setInterval(this.showMarquee, 2000)
    },
    props: {
      marqueeList: {
        type: Array
      }
    },
    methods: {
        showMarquee: function() {
            this.animate = true
            setTimeout(() => {
                this.marqueeList.push(this.marqueeList[0])

                this.marqueeList.shift()

                this.animate = false
            }, 500)
        }
    }
}
</script>

<style lang="scss" scoped>
.marquee {
    width: 250px;
    height: 30px;
    align-items: center;
    color: red;
    display: flex;
    box-sizing: border-box;
    overflow: hidden;
}

.marquee_box {
    display: block;
    position: relative;
    width: 96%;
    height: 30px;
    overflow: hidden;
}

.marquee_list {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
}

.marquee_top {
    transition: all 0.5s;

    margin-top: -30px;
}

.marquee_list li {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    padding-left: 20px;
    text-decoration: underline;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.marquee_list li span {
    padding: 0 2px;
}
</style>


