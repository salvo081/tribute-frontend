import './OneBlog.css';

export default function OneBlog({ random }) {
  console.log(random);
  return (
    <article className="OneBlog">
      <img src={`https://picsum.photos/200/200?random=${random}`} alt="test" />
      <section>
        <h1>One Blog</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          dolorem libero tenetur enim expedita neque quidem veniam, ducimus sed
          commodi maxime ratione nihil. Pariatur, consectetur repellendus unde
          doloribus blanditiis ut?
        </p>
      </section>
    </article>
  );
}
