<template>
  <div class="key-board-box" v-if="!isHide">
    <!--遮罩层颜色-->
    <div class="key-board-bg"></div>
    <div class="key-board">
      <div class="close" @click="isHide=true">
        <span class="iconfont icon-delete"></span>
      </div>
      <div class="password-box">
        <div class="password-item" v-for="index in 6" :key="index">
          <div class="is-inputed" v-if="index<=password.length"></div>
        </div>
      </div>
      <div class="key-board-input">
        <div
          class="input-item"
          v-for="index in 9"
          :key="index"
          v-text="index"
          @click="clickHandler(index)"
        ></div>
        <div class="row">
          <div class="input-item"></div>
          <div class="input-item" @click="clickHandler(0)">0</div>
          <div class="input-item delete-item" @click="deleteHandler">
            <span class="iconfont icon-deleteicon"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../../assets/font/iconfont.css";
export default {
  name: "keyboard",
  model: {
    prop: "value",
    event: "input",
  },
  data() {
    return {
      password: [],
      isHide: false,
    };
  },
  methods: {
    clickHandler(value) {
      let password = this.password;
      if (password.length < 6) {
        this.password.push(value);
      }
      if (password.length == 6) {
        this.$emit("input", this.password.join(""));
        this.$emit("complete", this.password.join(""));
        this.isHide = true;
      }
    },
    deleteHandler() {
      let password = this.password;
      if (password.length > 0 && password.length <= 6) {
        this.password.pop();
      }
    },
  },
};
</script>
<style>
.key-board-box {
  --pd: 10px 15px;
  --linehight: 50px;
}
.key-board-bg {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(123, 123, 123, 0.5);
}
.key-board {
  position: absolute;
  background: #fff;
  left: 0;
  bottom: 0;
  right: 0;
}
.close {
  display: flex;
  justify-content: flex-end;
  padding: var(--pd);
  box-sizing: border-box;
  border-bottom: 1px solid #f8f8f8;
}
.is-inputed {
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background: #666;
}
.password-box {
  padding: 15px;
  display: flex;
}
.password-item {
  width: 20%;
  height: 45px;
  border: 1px solid #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.password-item:not(:last-of-type),
.input-item:not(:first-of-type) {
  border-right: none;
}
.input-item {
  text-align: center;
  width: 33.333333%;
  height: var(--linehight);
  line-height: var(--linehight);
  border: 1px solid #f1f1f1;
  font-size: 20px;
  border-bottom: none;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: middle;
}
.input-item:first-of-type {
  border-left: none;
  border-right: none;
}
.delete-item {
  background: #ededed;
}
</style>