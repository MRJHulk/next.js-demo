// 嵌套布局，在文件夹（例如app/dashboard/layout.js）中定义的布局适用于特定的路由（例如acme.com/dashboard），并在这些路由处于活动状态时进行渲染。默认情况下，文件层次结构中的布局是嵌套的，这意味着它们通过其children属性包装子布局。
import s from "./layout.module.scss";
export default function marketing({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className={s.marketingLayout}>{children}</div>
    </section>
  );
}
