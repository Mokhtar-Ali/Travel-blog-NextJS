import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
    {title: 'Cairo', country: 'Egypt', date: '07/13/2020', image: 'cairo.jpeg', youtube_link: 'https://www.youtube.com/watch?v=0NjnKn63r8w', slug: 'egypt', content: "Whenever you hear Egypt, Your mind will always imagine three Pyramids, The Sphinx, Camels, and Horses. This picture isn't wrong, I'll be happy to write about it in this article that will make you more eager to visit Egypt. And I will write about everything you'll need to know before visiting The land of the Pharaohs."},
    {title: 'Ecuador', country: 'Ecuador', date: '07/13/2020', image: 'cairo.jpeg', youtube_link: 'https://www.youtube.com/watch?v=0NjnKn63r8w', slug: 'ecuador', content: "Whenever you hear Egypt, Your mind will always imagine three Pyramids, The Sphinx, Camels, and Horses. This picture isn't wrong, I'll be happy to write about it in this article that will make you more eager to visit Egypt. And I will write about everything you'll need to know before visiting The land of the Pharaohs."},
    {title: 'Thailand', country: 'Thailand', date: '07/13/2020', image: 'cairo.jpeg', youtube_link: 'https://www.youtube.com/watch?v=0NjnKn63r8w', slug: 'thailand', content: "Whenever you hear Egypt, Your mind will always imagine three Pyramids, The Sphinx, Camels, and Horses. This picture isn't wrong, I'll be happy to write about it in this article that will make you more eager to visit Egypt. And I will write about everything you'll need to know before visiting The land of the Pharaohs."}
  ]

function AllPostsPage(){
    return (
        <div>
            <AllPosts posts={DUMMY_POSTS}/>
        </div>
    )
}

export default AllPostsPage