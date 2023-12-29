import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from "./Welcome.module.scss";
import logo from "../assets/icons/mangosteen.svg";
// logo是一个路径
export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => (
      
      <div class={s.wrapper}>
        {/* 3个部分 header:logo; main:图片 文字内容;footer:按钮 */}
        <header>
          <img src={logo} alt="" />
          <h1>记账本本</h1>
        </header>
        <main>
          
          <RouterView></RouterView>
        </main>
        {/* 下一页，跳过的按钮 放在每一页里。 */}
        {/* <footer></footer> */}
      </div>
    );
  },
});
