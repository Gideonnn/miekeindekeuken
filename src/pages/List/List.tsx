export interface PostData {
  date: string;
  title: string;
  description: string;
  link: string;
}

const posts: PostData[] = [
  {
    date: '2021-12-05',
    title: 'Pompoen cakejes',
    description:
      'Oktober begint en overal zijn pompoenen te vinden. In de supermarkt, op het land en bij de buurman op de stoep.',
    link: '',
  },
];

export const List = () => (
  <div>
    <h1 className="font-sans text-3xl font-bold text-gray-900 break-normal md:text-4xl">Posts</h1>

    <div className="mt-8">
      {posts.map((post: PostData) => (
        <div className="flex mb-4 rounded-l-lg shadow">
          <img
            className="flex-shrink-0 w-1/2 rounded-l-lg"
            src="/images/pompoen-cakejes/1.jpeg"
            alt="pompoen cakejes"
          />
          <div className="p-4">
            <span className="text-xs text-gray-400">{post.date}</span>
            <h2 className="py-3 text-xl font-bold text-gray-900 break-normal md:text-2xl">
              {post.title}
            </h2>
            <p className="text-gray-400">{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
