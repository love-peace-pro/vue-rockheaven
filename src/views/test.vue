<template>
  <div class="productLeft">
    <!-- 左侧中图 -->
    <div class="mdImg">
      <img :src="require('../assets/imgs/details/' + mdImgUrl)" alt="" />
    </div>
    <!-- 遮罩层 -->
    <div
      v-show="isShow"
      class="marks"
      :style="{ top: top + 'px', left: left + 'px' }"
    ></div>
    <!-- 遮罩层 玻璃板 superMarks-->
    <div
      @mouseenter="enter"
      @mouseleave="leave"
      @mousemove="marks"
      class="superMarks"
    ></div>
    <!--左侧小图 -->
    <div class="smImg">
      <!--左按钮 -->
      <div @click="prev" class="button-prev">
        <img src="../assets/icon/prev.png" />
      </div>
      <div class="smImgUl">
        <ul :style="{ 'margin-left': marginLeft + 'px' }">
          <li
            @mouseenter="enterLi(index)"
            v-for="(item, index) of list"
            :key="index"
          >
            <img :src="require('../assets/imgs/details/' + item.sm)" alt="" />
          </li>
        </ul>
      </div>
      <!-- 右按钮 -->
      <div @click="next" class="button-next">
        <img src="../assets/icon/next.png" />
      </div>
    </div>
    <!-- 左侧大图 -->
    <div v-show="isShow" class="lgImg">
      <img
        :src="require('../assets/imgs/details/' + lgImgUrl)"
        alt=""
        :style="{ top: topLgImg + 'px', left: leftLgImg + 'px' }"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { sm: "s1.png", md: "s1.png", lg: "s1.png" },
        { sm: "s2.png", md: "s2.png", lg: "s2.png" },
        { sm: "s3.png", md: "s3.png", lg: "s3.png" },
        { sm: "s4.png", md: "s4.png", lg: "s4.png" },
        { sm: "s5.png", md: "s5.png", lg: "s5.png" },
        { sm: "s6.png", md: "s6.png", lg: "s6.png" },
        { sm: "s7.png", md: "s7.png", lg: "s7.png" },
        { sm: "s8.png", md: "s8.png", lg: "s8.png" },
      ],
      mdImgUrl: "s1.png",
      lgImgUrl: "s1.png",
      ulIndex: 0, //向左移动几个li
      marginLeft: 0, //向左向右移动的距离
      isShow: false, //控制遮罩层marks和大图片是否显示"
      left: 0, //marks左移位置
      top: 0, //marks下移位置
      leftLgImg: 0, //大图lgImg移动的位置
      topLgImg: 0, //大图lgImg移动的位置
    };
  },
  methods: {
    //鼠标进入小图时事件，显示对应的中图
    enterLi(e) {
      //e是对应的下标
      //console.log(e);
      this.mdImgUrl = this.list[e].md;
      this.lgImgUrl = this.list[e].lg;
    },

    //点击左右按钮事件ul的li移动,每个li宽74px，ul宽370显示5个li
    prev() {
      //向左移动-
      if (this.ulIndex > -(this.list.length - 5)) {
        this.ulIndex--;
        this.marginLeft = this.ulIndex * 74;
        //console.log(this.ulIndex)
      }
    },
    next() {
      //向右移动++
      if (this.ulIndex < 0) {
        this.ulIndex++;
        this.marginLeft = this.ulIndex * 74;
        //console.log(this.ulIndex)
      }
    },

    //鼠标进入和离开
    enter() {
      this.isShow = true;
    },
    leave() {
      this.isShow = false;
    },
    //遮罩层放大镜
    marks(e) {
      //console.log(e.offsetX,e.offsetY)   //鼠标移入时的位置·
      const marksWidth = 200; //marks的宽
      const marksHeight = 200; //marks的高

      this.left = e.offsetX - marksWidth / 2;
      this.top = e.offsetY - marksHeight / 2;
      //console.log(this.left,this.top)
      if (this.left < 0) {
        this.left = 0;
      } else if (this.left > 250) {
        this.left = 250;
      }
      if (this.top < 0) {
        this.top = 0;
      } else if (this.top > 250) {
        this.top = 250;
      }
      //console.log(this.left,this.top)

      //中图片div宽高450，大图片div宽高800
      this.leftLgImg = (-this.left * 800) / 450;
      this.topLgImg = (-this.top * 800) / 450;
    },
  },
  computed: {},
  watch: {},
};
</script>
<style scoped>
.content {
  width: 1200px;
  margin: 0 auto;
}
.content > .product {
  display: flex;
  justify-content: space-between;
}
/* 左侧大小图样式 */
.productLeft {
  width: 450px;
  position: relative;
}
/* 左侧中图 */
.mdImg,
.mdImg > img {
  width: 450px;
  height: 450px;
}
/*遮罩层superMarks */
.superMarks {
  width: 450px;
  height: 450px;
  background-color: rgba(220, 220, 220, 0);
  position: absolute;
  top: 0px;
  left: 0px;
}
/* 遮罩层 */
.marks {
  width: 200px;
  height: 200px;
  position: absolute;
  background-color: rgba(220, 220, 220, 0.5);
  /*top:0px;  //内联设置了动态的top，left
        left:0px;*/
}
/* 左侧小图 */
.smImg {
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}
.smImgUl {
  overflow: hidden;
  width: 370px;
}
.smImg ul {
  display: flex;
  width: 370px;
  margin: 0;
  padding: 0;
}
.smImg ul > li {
  padding: 0 3px;
}
.smImg img {
  height: 60px;
  margin: 4px;
}
/* 左侧隐藏大图 */
.lgImg {
  width: 400px;
  height: 400px;
  overflow: hidden;
  position: absolute;
  top: 0px;
  left: 450px;
  border: 2px solid #aaa;
  background-color: #fff;
}
.lgImg img {
  width: 800px;
  height: 800px;
  position: absolute;
  /*top:100px;
        left:100px;*/
}

/* product右侧 */
.productRight {
  width: 700px;
}
/* 左右按钮 */
.button-prev,
.button-next {
  width: 35px;
  height: 35px;
  line-height: 30px;
  border: 1px solid #ddd;
  border-radius: 50%;
  text-align: center;
}
.button-prev:hover,
.button-next:hover {
  background-color: #eee;
}
.button-prev > img,
.button-next > img {
  width: 20px;
  height: 20px;
}
</style>
