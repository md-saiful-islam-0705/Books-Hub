const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Our Books<span className="text-pink-400">Hub</span></h1>
      <p className="text-lg text-gray-700 mb-8">
        Welcome to Our Bookshelf, your ultimate destination for managing and
        exploring your favorite books! Our platform is designed to provide you
        with a seamless experience for discovering, organizing, and tracking
        your reading journey.
      </p>
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          At Our Bookshelf, our mission is to empower book enthusiasts like you
          to connect with literature in a meaningful way. Whether you are an avid
          reader, a casual bookworm, or just getting started on your reading
          adventure, we are here to support and inspire you every step of the
          way.
        </p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Features</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Organize Your Library: Easily manage your collection of books with
            our intuitive library organization features.
          </li>
          <li>
            Discover New Reads: Explore a vast selection of books across genres,
            authors, and topics.
          </li>
          <li>
            Track Your Progress: Keep track of your reading progress with
            detailed statistics and insights.
          </li>
          <li>
            Connect with Fellow Readers: Join a vibrant community of book lovers
            and engage in discussions, book clubs, and reading challenges.
          </li>
          <li>
            Customize Your Experience: Tailor your reading experience to suit
            your preferences with customizable settings and themes.
          </li>
        </ul>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Meet the Team</h2>
        <p className="text-gray-700">
          Our Bookshelf is brought to you by a passionate team of book
          enthusiasts dedicated to creating the ultimate reading platform. From
          developers to designers, writers to editors, we are united by our love
          for books and our commitment to building an exceptional reading
          experience for our users.
        </p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700">
          Have questions, feedback, or suggestions? We would love to hear from
          you! Feel free to reach out to our team at{" "}
          <a href="mailto:contact@ourbookshelf.com" className="text-blue-500">
            contact@ourbookshelf.com
          </a>{" "}
          and we all get back to you as soon as possible.
        </p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Join Our Community</h2>
        <p className="text-gray-700">
          Ready to embark on your reading journey? Join Our Bookshelf today and
          start exploring the wonderful world of books!
        </p>
      </div>
    </div>
  );
};

export default About;
