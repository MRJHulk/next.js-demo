export default function Page({ params }: any) {
  console.log(params, "params");

  return <h1>shop-[slug]-page--My post:{params.slug}</h1>;
}
