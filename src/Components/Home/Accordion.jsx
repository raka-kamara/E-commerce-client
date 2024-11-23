const Accordion = () => {
  return (
    <div className="container">
      <div className="join join-vertical mx-auto flex flex-col gap-2 w-4/5 lg:w-2/3">
        {/* Product Categories Section */}
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Product Categories
          </div>
          <div className="collapse-content">
            <ul>
              <li>Electronics</li>
              <li>Clothing</li>
              <li>Home Appliances</li>
              <li>Books & Media</li>
              <li>Health & Beauty</li>
              <li>Sports & Outdoors</li>
            </ul>
          </div>
        </div>

        {/* Shipping Information Section */}
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Shipping Information
          </div>
          <div className="collapse-content">
            <p>We offer free shipping on orders over $50. Delivery times vary depending on location, but most orders are shipped within 1-3 business days. You will receive a tracking number once your order has shipped.</p>
          </div>
        </div>

        {/* Return & Refund Policy Section */}
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Return & Refund Policy
          </div>
          <div className="collapse-content">
            <p>We accept returns within 30 days of purchase. The product must be in its original condition and packaging. Refunds will be processed once the returned item is received and inspected.</p>
          </div>
        </div>

        {/* Frequently Asked Questions (FAQ) Section */}
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Frequently Asked Questions (FAQ)
          </div>
          <div className="collapse-content">
            <h4>How do I track my order?</h4>
            <p>You can track your order by logging into your account and visiting the "My Orders" section. You will also receive an email with tracking details once your order has shipped.</p>

            <h4>How do I contact customer support?</h4>
            <p>You can reach customer support through our live chat on the website or by emailing us at support@emart.com.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
