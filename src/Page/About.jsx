import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animation happens only once
    });
  }, []);
  
  return (
    <div className="bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Introduction Section */}
        <section className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl font-semibold text-gray-800 transition-all duration-500 ease-in-out transform hover:scale-105">
            Welcome to E-mart
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Your one-stop shop for everything you need – from electronics to fashion, home essentials to books!
          </p>
        </section>

        {/* Mission Section */}
        <section className="text-center mb-12" data-aos="fade-left">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            At E-mart, we strive to make shopping easy, convenient, and affordable for everyone. Our mission is to provide
            quality products at competitive prices, while offering an outstanding shopping experience through our user-friendly
            platform and excellent customer support.
          </p>
        </section>

        {/* Vision Section */}
        <section className="bg-gray-100 p-8 rounded-lg mb-12" data-aos="fade-right">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Our Vision</h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            To be the most trusted and customer-centric online shopping platform, where people can discover and buy anything
            with ease. We aim to empower both buyers and sellers, creating a seamless, enjoyable experience for all.
          </p>
        </section>

        {/* Our Team Section */}
        <section className="text-center mb-12" data-aos="zoom-in-up">
          <h2 className="text-3xl font-semibold text-gray-800">Meet Our Team</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMPEhUQDxMQDxUPEBcSFhYXFhAVEBAQFxcXFhgSGBMYHSggGBolGxcTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0ODw0PDisZFRkrNysrKystLSsrLSstLSstKysrKys3KysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcBBAUDAv/EAD4QAAIBAgMEBggFAgUFAAAAAAABAgMRBAUhBhIxURNBYXGBkQciMjNCUqGxFHJzssGS4SNTgtHwJENiY6L/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ALxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYBkAAAAAAAAAAAAAAAGvjcZTox36sowiut/xzIdm23XGOFhf/wA5/wAR/wBwJvKVtXoc/E59h6Wk61NeN/sVdjs1rV3erUlLsvaPkjTAtF7XYT/M+jPbD7S4Wo7KtBN9TuvuVQYaAu2lVUleLUlzVmj7KZwOYVaD3qU5Q8dH2NE0yLbSM2oYq0HwU17DfauoCZA+YyT1Wqfkz6AAAAAAAAAAAAAAAAAAAAAAAAAGnmmYQw1OVWo7KK4dcn1JG4Vtt5mjq1uhi/Vo8e2b4+QHGzfNamKm51G7X9WPwwXJLyNIwjJpkAAAAAAwAJJsttPLDtUqzcqTfFu7p/27CyKVRTSlFqSaumuDXMpMl+wufOEvw1V+rL3bfwy+XxJViwAECKAAAAAAAAAAAAAAAAAAAAANbMMSqVOdR8IQcvIpqpUc25S4ye8+9ll7eYjcwsl11JKH8/wVmAABpkAAAAAAAAEZNNNaNO67GABbuQY/8TQhV63Gz/MtGdIhfo3xF4VKT+GSkvHj/BNDLQAAAAAAAAAAAAAAAAAAAAAhfpJq+pSjzm35L+5BCwfSNht6jCov+3Us+xNP+xXxUAAVAAAAAAAAAAAS70bS/wAaqv8A1J//AEiwSDejfDe9qvsgvuycmWgAAAAAAAAAAAAAAAAAAAABoZ3gunoVKXzR0/MtV9Sn7NaO6adn2MurEVNyMpfLFvyRTOJrupOU2knOTk0uCuB5gA0yAAAAAAAAGGzJ6YapGM4ymt6MZptc0ndoC0tk8B+Hw0IvSUlvy75a/ax2TxwlZVIRnHhKKa7mj2MtAAAAAAAAAAAAAAAAAAAAADwxkN6E1zi19ClkXfJX8SmcxoOnVqQatu1GvC+gGuADTIAAAAAAAAYaMn1TjvSUV8UkvNgW9kcbYekn/lR+xvnlh6e7GMflil9D1MtAAAAAAAAAAAAAAAAAAAAAAQbbzJG/+qprgrVF2L4icnxVgpJxeqkrPuYFJg3c6wDw1edJ8FL1e2D4GkVAAFQAAAAADubIZXKvXjK3qUZKUn1XWqj5nHw9CVScacFdzdl3stzJMtjhqUaUepavrlLrZKsbyMgEUAAAAAAAAAAAAAAAAAAAAAAABDvSDle/BYiC1p6S5uD6/AgCLgz9L8NWvw6Gf2ZT6LEZABUAAAAMEVL/AEe5cp1JV5a9H6sfzPi/IsBEU9HULYeT51n9EiWEUAAAAAAAAAAAAAAAAAAAAAAAAAPmU7K70S18OYHG2w33haipreuvW57nX9CqkXHl+KjXi5xalFycV3J2INtjs46EnXoq9OT9ZJe7fPuKmIsACoAAAYPqnFyajFOTfBK7bfcTHIdi3K08VomtKa4/6mSrjs7BW/CpJ3e/JvmmSQ5WKhTwq6WO7ThBKMkklFxvZeKOlTmpJSVmmrprg0RX2AAAAAAAAAAAAAAAAAAAMNnNzLPaGH95UV/lWsn4IDpmLkFx23r4UKS753/ajg4zabFVdHUcU+qPqoCz8bmNKir1Zxh3vXy4kF2m2t6eLpYe8YP2pPSUlyS6kRScnJ3bbfNu78wVEx9HmZbspYeT0kt6HevaX2J5OCkmpJNNWafBoprLsU6NWFVfBNPwvqi5KNRTipLVSV13MlVANpdkJU26uGW9Di4cZR7VzREny/4uwu4ie2eU4fcdecuhn1NL3kuTiuL7Sory51clyGri36i3Ydc37K7ubN7YvKqGJm+mk3KGqp8IyXNvr7iyqVNRSjFKKXBKyS8AY5WR7P0sIvUW9N8Zv2n3cjrhmpm2OWHpSqy+FaLm+pEVDfSDmu9JYaD0jaU/zdSPTYbP7WwtV/pt/sIbXrupJzk7ubu32s+E7arRrVdjAu5MyVvlu21aklGrGNVLS+qnbv4MkuA2yw1TScnSfKSdr96AkYPKhiIVFeEoyXY0z1uAAAAAAAAAMHAzfauhhm43dWa+GPU+TZEsy2yxFXSnajHss5W/My4LExePp0VerOEF2tIjWY7c0oaUYSqvm/Vj5kArVpTe9OUpvm22fIR2cx2nxNfRzdOL+GGn14nGbvq22+fWAMNAAVAAAYZZ2w+O6XDRi3eVJuD7r3T8rFZEm2Ax3R4h0m9K0dPzrh9LkVY85JJt6JK75JFVbVZw8VWdr9HTbjBdT5y8Scba1pwws3Tvq0pPrUG9X/BVwG3lWNeHqxqx+B6rnHrXkXBhqyqRjOOqkk0+xlKssX0fYicsPKMvZpztF81a9vBgSlkA9IOab81hovSn60teMmtF5E2zPFqhSnVlwhBvvaWiKexNd1JyqS1c5OT8SK8kZANMgACvShiJ03enOcH2Nr7HdwO2eJpaTcayXzaS/qRHgQ1YmX7c0Z2VWMqL/qj5okWEzClWV6U4T7mmUyfVOpKDvByi+abT+gF2XMlX5btfiaWk2q0eUrX/AKkTDKNrKGItFt0Zv4ZWs+6XBkVIAeXTx+aPmgBTmZL/ABqv6s/3M8DYzL31X9Wf7ma5pkAAAAAAAAAAA9MLiHSnGpHjCSkvA8wFXLFxr07+1GrDwaaKozvLXha0qT4J3i+cHwJzsDj+kw/Rt3dGW727r1X8nF9I0101Jdapu/PV6GYqIst7Z/CKjh6cF1QTfbJ6sqJPh3l04V3hFrrivsioi3pFxW7RhTT95O77VH+7RX5JdvsX0mI3FwpRt3Sdm/4I0IAAKgAAAAAAAAYsZAC/awABsZl76r+rP9zNc2My99V/Vn+5muAAAAAAAAAAAAwZAVIdhsd0WJUG9Kycf9XFf7GNuqu9i2vkhFeOtzhUKrhKM1xjJNeBsZxjOnrTq/O0+7TgTBptFs5DjVLCQqt+zT17N1a/Yqc7eAzro8FVw9/WnJbvH2ZW3vt9QOVjsS6tWdR/HNy7k3ovKx4mEZAAAqAAAAAAAAAAAAADYzL31X9Wf7ma4AAAAAAAAAAAAAAAAAUMS6gABkAAAAgAAAAAAAAAAAAA/9k=" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 transition-transform duration-300 transform hover:scale-110"/>
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3P3U0mlFYd789-6bou5qpitVRAOiT-n0CEA&s" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 transition-transform duration-300 transform hover:scale-110"/>
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Product Manager</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIwCTCZ-RS38Wa1VuVWymZvZdEc8jCt6jiPQ&s" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 transition-transform duration-300 transform hover:scale-110"/>
              <h3 className="text-xl font-semibold text-gray-800">Emily Johnson</h3>
              <p className="text-gray-600">Head of Marketing</p>
            </div>
            {/* Team Member 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3P3U0mlFYd789-6bou5qpitVRAOiT-n0CEA&s" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 transition-transform duration-300 transform hover:scale-110"/>
              <h3 className="text-xl font-semibold text-gray-800">Michael Lee</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center" data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have any questions? We’d love to hear from you! Feel free to get in touch with our support team at{" "}
            <a href="mailto:support@emart.com" className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors duration-300">support@emart.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
