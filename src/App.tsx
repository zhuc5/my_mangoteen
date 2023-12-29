import { defineComponent, onMounted, ref } from "vue";
import { RouterView } from 'vue-router';
import "./App.scss";
export const App = defineComponent({
  setup() {
    const refCount = ref(0);
    const onClick = () => {
      refCount.value += 1;
    };
    onMounted(() => {
      let vh = window.innerHeight * 0.01
      // 然后，我们将——vh自定义属性中的值设置为文档的根
      document.documentElement.style.setProperty('--vh', `${vh}px`)
 
      // 我们监听resize事件 视图大小发生变化就重新计算1vh的值
      window.addEventListener('resize', () => {
        // 我们执行与前面相同的脚本
        let vh = window.innerHeight * 0.01
        console.log(vh);
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      })
    }
);
    return () => {
      return (
        <>
          {/* <header>
            导航
            <ul>
              <li>
                <router-link to="/">foo</router-link>
              </li>
              <li>
                <router-link to="/about">bar</router-link>
              </li>
            </ul>
          </header> */}
          <div class='page'>
            <RouterView></RouterView>
          </div>
          {/* <footer>页脚</footer> */}
        </>
      );
    };
  },
});
