<!--  -->
<template>
  <div class="grid-view" ref="gridView">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    column: {
      type: [Number, String],
      default: "auto",
    },
    hSpace: {
      type: [Number, String],
      default: "auto",
    },
    line: {
      type: [Number, String],
      default: "auto",
    },
    wSpace: {
      type: [Number, String],
      default: "auto",
    },
  },
  updated() {
    //this.spaceLoad();
    this._autoLayout()
  },

  components: {},

  computed: {},

  mounted() {
    //this.spaceLoad();
    this._autoLayout()
  },

  methods: {
    // spaceLoad() {
    //   let grid = this.$refs.grid;
    //   let children = grid.children;
    //   let len = children.length;

    //   //计算px转化为vw vh比例
    //   let wRatio = (window.innerWidth / 100).toFixed(4);
    //   let hRatio = (window.innerHeight / 100).toFixed(4);

    //   //给列数和元素定高时
    //   if (
    //     typeof this.column != "string" &&
    //     typeof this.hSpace != "string" &&
    //     typeof this.row == "string" &&
    //     typeof this.wSpace == "string"
    //   ) {
    //     grid.style.width = 100 % +'px';
    //     let itemWidth = Math.floor(grid.style.width / this.column);
    //     for (let i in children) {
    //       //children[i].style.width = itemWidth / wRatio + "vw";
    //       //children[i].style.height = this.hSpace / hRatio + "vh";
    //       //children[i].innerWidth = itemWidth / wRatio + "vw";
    //       //children[i].innerHeight = this.hSpace / hRatio + "vh";
    //     }
    //   }

    //   //给行数和元素定宽时
    //   if (
    //     typeof this.column == "string" &&
    //     typeof this.hSpace == "string" &&
    //     typeof this.row != "string" &&
    //     typeof this.wSpace != "string"
    //   ) {
    //     grid.style.height = 100 % +"px";
    //     let itemHeight = Math.floor(grid.style.height / this.row);
    //     for (let i in children) {
    //       //children[i].style.width = this.wSpace / wRatio + "vw";
    //       //children[i].style.height = itemHeight / hRatio + "vh";
    //     }
    //   }
    // },
    _autoLayout () {

        // 获取父级元素
        let oGridView = this.$refs.gridView;

        // 获取子元素
        let children = oGridView.children
        let len = children.length;
      
        // 计算1vw等于多少px;
        // 宽
        let widthRatio = (window.innerWidth / 100).toFixed(4);
        // 高
        let heightRatio = (window.innerHeight / 100).toFixed(4);



        //设定列数和高度 必须传入列数和高度的数字，且行数和宽度传入的必须是字符串
        if (typeof this.column != 'string' && typeof this.hSpace != 'string' && typeof this.line == 'string' && typeof this.wSpace == 'string' ) {

          // 给父级一个宽度
          oGridView.style.width = 100% + 'px';

          // 计算item的宽度(原生方法区像素有小数时会向上取整，所以要将取到的结果减一)
          let itemWidth = ((oGridView.clientWidth - 1) / this.column).toFixed(4);
          
          // 給子元素赋值
          for (let i = 0; i < len; i++) {
            let item = children[i];
            item.style.width = (itemWidth / widthRatio) + 'vw';
            item.style.height = (this.hSpace / heightRatio) + 'vh';
          
          }

        }

        //设定行数和宽度 必须传入行数和宽度的数字，且列数和高度传入的必须是字符串
        if ( typeof this.line != 'string' && typeof this.wSpace != 'string' && typeof this.column == 'string' && typeof this.hSpace == 'string') {
          
          // 给父级一个高度
          oGridView.style.height = 100% + 'px';  

          let itemHeight = Math.floor(oGridView.clientHeight / this.line);

           for (let i = 0; i < len; i++) {
            let item = children[i];
            item.style.height = (itemHeight / heightRatio) + 'vh';
            item.style. width = (this.wSpace / widthRatio) + 'vw';
          }
        }
      }
  },
};
</script>
<style  scoped>
.grid-view {
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  margin-top: 10px;
}
</style>