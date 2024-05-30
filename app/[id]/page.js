export async function generateStaticParams() {
  const response = await fetch('https://dummyjson.com/users');
  const posts = await response.json();

  return posts.users.map((post) => ({
    id: post.id.toString(),
  }));
}

async function getPost(id) {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  return res.json();
}

const SingleAnimePage = async ({ params }) => {
  const data = await getPost(params.id);
  return (
    <section className="w-full flex flex-col items-center justify-between gap-20">
      <h1 className="text-white">{data?.maidenName}</h1>
      <img src={`${data?.image}`} alt="image" className="w-[300px] h-auto" />
    </section>
  );
};

export default SingleAnimePage;
