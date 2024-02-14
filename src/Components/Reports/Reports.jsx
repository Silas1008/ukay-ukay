import "./Reports.css"
import { Link } from "react-router-dom"
import depop1 from "../Assets/depop1.png"
import depop2 from "../Assets/depop2.png"
import grailed1 from "../Assets/grailed1.png";
import grailed2 from "../Assets/grailed2.png";
import posh1 from "../Assets/posh1.png";
import posh2 from "../Assets/posh2.png";
import person1 from "../Assets/person1.jpg";
import person2 from "../Assets/person2.jpg";
import person3 from "../Assets/person3.jpg";
import person4 from "../Assets/person4.jpg";

const Reports = () => {
  return (
    <div className="reports">
      <h1 style={{marginBottom: "100px"}}>Cultural Phenomenon: Inside the Thriving World of Ukay-Ukay in the Philippines: A Comprehensive Analysis</h1>

      <div className="introduction">
      <p>"Ukay-ukay" is a term used in the Philippines to refer to thrift stores or shops that sell secondhand clothes, shoes, bags, and other items at very affordable prices. The term itself is derived from the Filipino word "ukay," which means to dig or to sift through. Ukay-ukay has become a popular shopping destination for Filipinos looking for budget-friendly clothing options.

      These thrift stores typically source their merchandise from various places such as donations, surplus shops, or even imported used clothing from other countries. The items sold in ukay-ukay stores are often in good condition, with some even being branded or designer items. Shoppers can find a wide range of items, from everyday wear to vintage and retro pieces.</p>
      
      <p>Ukay-ukay shopping has gained popularity not only because of its affordability but also because it offers a unique shopping experience. Customers enjoy the thrill of hunting for hidden gems and discovering one-of-a-kind items at bargain prices. Additionally, ukay-ukay shopping is seen as a sustainable and eco-friendly way to shop, as it gives items a second life and reduces waste.
      </p>
      <p>In recent years, ukay-ukay has also become popular among fashion enthusiasts and influencers who appreciate the individuality and uniqueness of thrifted clothing. Some even incorporate ukay-ukay finds into their personal style, showcasing how secondhand clothing can be fashionable and trendy.</p>
      
      <p>However, it's worth noting that the popularity of ukay-ukay has raised concerns about its impact on local industries, particularly the textile and garment sectors. Critics argue that the influx of cheap secondhand clothing from abroad can undercut local businesses and hinder the development of the domestic fashion industry.
      </p>
      
      <p>It is indeed a popular aspect of Filipino culture, especially among budget-conscious individuals and those who enjoy finding unique items at affordable prices, as well as the opportunity to reduce waste by giving pre-loved items a second life.</p>
      </div>

      <div className="intro-points">
      <h2>Why the hype</h2>
      <ul>
      <li>Affordability:</li>
      <p>One of the primary appeals of traditional ukay-ukay is its affordability. Items are sold at significantly lower prices compared to new clothing in retail stores, making it an attractive option for budget-conscious shoppers.</p>

      <li>Variety:</li>
      <p>Ukay-ukay stores offer a wide variety of clothing styles, sizes, and brands. Customers can find everything from vintage pieces to contemporary fashion trends, allowing for a diverse selection that caters to different tastes and preferences.</p>

      <li>Treasure Hunting Experience:</li>
    <p>Shopping at traditional ukay-ukay stores is akin to a treasure hunt, where shoppers sift through racks of clothing to find hidden gems. The thrill of discovering unique and one-of-a-kind items adds to the appeal of thrift shopping.</p>

    <li>Sustainability: </li>
    <p> Ukay-ukay promotes sustainability by giving pre-loved clothing a second life. By purchasing secondhand items, shoppers contribute to reducing textile waste and environmental impact associated with fast fashion.</p>

    <li>Community Engagement:</li>
    <p>Ukay-ukay stores often foster a sense of community among shoppers. Customers bond over shared experiences of finding great deals or unique pieces, creating a social aspect to thrift shopping.</p>
      </ul>
      </div>

      <div className="audience">
      <h1>Understanding the Varied Audience</h1>
      <ul>
      <li>Young Adults (18-30):</li>
      <p>This demographic includes students, young professionals, and individuals in their early adulthood who are starting to establish their personal style while managing limited budgets. They are attracted to ukay-ukay stores for their affordability, trendy options, and the thrill of finding unique pieces.</p>

      <li>Adults (31-45):</li>
      <p>Adults in this age group may also shop at ukay-ukay stores, particularly those who are budget-conscious, environmentally conscious, or appreciate the vintage and retro styles often found in thrift shops. They may be looking for affordable clothing options for themselves or their families.</p>

      <li>Middle-aged Adults (46-60):</li>
      <p>While not as prevalent as younger age groups, some middle-aged adults may also be target buyers for ukay-ukay stores. They may shop at thrift stores to find affordable clothing options or to explore unique and nostalgic fashion pieces from their youth.</p>

      <li>Seniors (60+):</li>
      <p>While less common, seniors may also be target buyers for ukay-ukay stores, especially those who are on fixed incomes or are thrifty by nature. They may appreciate the affordability and variety of options available at thrift stores, as well as the opportunity to find vintage pieces that evoke nostalgia.</p>

      </ul>

      <p style={{fontSize: "25px", marginTop:"30px"}}><em>"ukay-ukay stores in the Philippines cater to a broad spectrum of age groups, with a primary focus on younger demographics due to their typically higher levels of fashion consciousness, budget constraints, and willingness to explore alternative shopping options. However, thrift shopping appeals to individuals of all ages who value affordability, sustainability, and unique fashion finds."</em></p>
      </div>

      <div className="target-users">
      <h1>Know the enthusiasts</h1>
      <img src={person1} alt=""/>
      <img src={person2} alt=""/>
      <img src={person3} alt=""/>
      <img src={person4} alt=""/>
      </div>

      <div className="competitors">

      <div className="depop">
      <h1>Competitor's analyst and insights on the platform</h1>
      <ul>
     <h2 style={{fontWeight: "500"}}> 1.DEPOP</h2>
      <li>UX</li>
      <p>Depop offers a visually appealing and intuitive interface, resembling a social media platform where users can browse and discover items curated by sellers.</p>

      <li>Features</li>
      <p>Key features include in-app messaging for communication between buyers and sellers, social sharing options, and a personalized feed based on user preferences.</p>

      <li>Concept</li>
      <p>Depop combines the convenience of online shopping with the social and interactive elements of a marketplace, catering to a younger demographic interested in fashion and sustainability.</p>
      </ul>

      <div className="comp-images">
      <img src={depop1} alt=""/>
      <img src={depop2} alt=""/>
      </div>
      <h6><Link to="https://www.depop.com/" target="_blank">Know more about DEPOP here</Link></h6>
      </div>

      <div className="grailed">
      <ul>
     <h2 style={{fontWeight: "500"}}> 2.GRAILED</h2>
      <li>UX</li>
      <p>Grailed provides a sleek and minimalist interface focused on high-end streetwear and designer fashion.</p>

      <li>Features</li>
      <p> Notable features include advanced search filters, authentication services for luxury items, and community forums for discussions and advice.</p>

      <li>Concept</li>
      <p>Grailed targets fashion-forward individuals interested in streetwear and luxury fashion, offering a curated platform for buying and selling rare and coveted items.</p>
      </ul>

      <div className="comp-images">
      <img src={grailed1} alt=""/>
      <img src={grailed2} alt=""/>
      </div>
      <h6><Link to="https://www.grailed.com/" target="_blank">Know more about GRAILED here</Link></h6>
      </div>

      <div className="poshmark">
      <ul>
     <h2 style={{fontWeight: "500"}}> 4. PoshMark</h2>
      <li>UX</li>
      <p>Poshmark offers a user-friendly interface with a focus on social shopping and community engagement.</p>

      <li>Features</li>
      <p> Key features include themed virtual "Posh Parties," where users can shop and interact with others, as well as seller tools for listing and promoting items.</p>

      <li>Concept</li>
      <p> Poshmark emphasizes social interaction and peer-to-peer commerce, creating a dynamic and engaging shopping experience for users.</p>
      </ul>

      <div className="comp-images">
      <img src={posh1} alt=""/>
      <img src={posh2} alt=""/>
      </div>
      <h6><Link to="https://poshmark.com/" target="_blank">Know more about POSHMARK here</Link></h6>
      </div>

      <div className="analyst">
      <h3>The competitive landscape for traditional ukay-ukay stores in the Philippines is diverse, with competitors ranging from traditional retail outlets to online thrift platforms. Each competitor offers unique features and caters to specific niches within the thrift shopping market. While online platforms provide convenience and innovative features, traditional ukay-ukay stores can leverage their unique charm and community engagement to remain competitive. By embracing digital technologies and adapting to changing consumer preferences, ukay-ukay stores can continue to thrive in the evolving retail landscape while retaining their cultural significance and sustainability ethos.<Link to="https://drive.google.com/file/d/1nttdRbU8-MRYnOoe_08ooS0TjoFQpge4/view?usp=drive_link" style={{textDecoration: "none"}}>In depth Report on the competitive analyst here.</Link></h3>
      </div>
      </div>

      <div className="what">
      <h1>What stood out...</h1>
      <ul>
      <li>The social and interactive elements of platforms like Depop and Poshmark enhance the shopping experience, creating a sense of community among users.</li>

      <li>Advanced search filters and authentication services on platforms like Grailed ensure a seamless and secure shopping experience for buyers.</li>
      </ul>
      <div className="could">
      <h1>Areas for improvement</h1>
      <ul>
      <li>Improving seller verification and product authentication processes to enhance trust and credibility, particularly for high-value items.</li>

      <li>Enhancing accessibility and inclusivity features to accommodate diverse user needs and preferences, such as offering more size-inclusive options and adaptive technologies.</li>
      </ul>
      </div>
      </div>

      <div className="conclusions">
      <h1>Conclusions</h1>
      <p>Online thrift platforms offer a modern and convenient alternative to traditional ukay-ukay shopping, catering to a diverse range of users with varying needs and preferences. By leveraging innovative features and social engagement, these platforms create immersive and interactive shopping experiences that resonate with today's fashion-conscious consumers.</p>
      </div>

      <div className="thanks">
      <h1 style={{textAlign: "center", marginTop: "100px"}}>Thanks for the read.</h1>
      </div>
    </div>
  )
}

export default Reports
