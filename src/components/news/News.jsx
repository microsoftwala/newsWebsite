import React, { useEffect, useState } from "react";
import { auth } from "../../Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "./News.css";
import Card from "./Card";
import Nav from "./Nav";

function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function News() {
  let responses = {
    status: "ok",
    totalResults: 13045,
    articles: [
      {
        source: {
          id: "wired",
          name: "Wired",
        },
        author: "Joel Khalili",
        title: "Fresh Bitcoin Hype Shows Crypto Just Can’t Help Itself",
        description:
          "After crashes, scandals, and SBF’s guilty verdict, many hoped the crypto industry would grow up. Speculation around the arrival of a spot bitcoin ETF shows old hype dies hard.",
        url: "https://www.wired.com/story/bitcoin-etf-crypto-investments/",
        urlToImage:
          "https://media.wired.com/photos/65668f0cb38d7a2373721a48/191:100/w_1280,c_limit/Crpyto-Can't-Help-Itself-Business-1400047284.jpg",
        publishedAt: "2023-11-29T12:00:00Z",
        content:
          "The prospect that US residents may soon be able to invest in bitcoin through their brokerage, as if it were a regular stock, has prompted a fresh round of hype in crypto circlesand a surge in crypto … [+2137 chars]",
      },
      {
        source: {
          id: "wired",
          name: "Wired",
        },
        author: "Matt Burgess",
        title:
          "Scammers Are Tricking Anti-Vaxxers Into Buying Bogus Medical Documents",
        description:
          "On Telegram, scammers are impersonating doctors to sell fake Covid-19 vaccination certificates and other products, showing how criminals are taking advantage of conspiracy theories.",
        url: "https://www.wired.com/story/telegram-covid-19-vaccination-fakes/",
        urlToImage:
          "https://media.wired.com/photos/657cdc0f0bfff3d8273cf8dd/191:100/w_1280,c_limit/Anti-Vaxxers-sold-fake-medical-docs-Security-GettyImages-924224840.jpg",
        publishedAt: "2023-12-18T12:00:00Z",
        content:
          "Draper and Proops say the efforts used repeated messaging, often replying to verified accounts on X that are linked to anti-vaccination sentiments, and consistently mentioned conspiracy theories such… [+2346 chars]",
      },
      {
        source: {
          id: null,
          name: "Gizmodo.com",
        },
        author: "Maxwell Zeff",
        title:
          "Sam Altman’s Weird Eyeball Scanning Crypto Tech Comes to Minecraft",
        description:
          "Worldcoin, Sam Altman’s cryptocurrency venture, is now integrating its verification services into popular apps such as Reddit, Discord, Shopify, Mercado Libre, Telegram, and Minecraft. The move is part of Altman’s World ID 2.0, which describes itself as “a hu…",
        url: "https://gizmodo.com/worldcoin-sam-altman-eye-scan-crypto-minecraft-1851096041",
        urlToImage:
          "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/7bc02f7461ba489abf2051851f709254.png",
        publishedAt: "2023-12-13T17:45:00Z",
        content:
          "Worldcoin, Sam Altmans cryptocurrency venture, is now integrating its verification services into popular apps such as Reddit, Discord, Shopify, Mercado Libre, Telegram, and Minecraft. The move is par… [+2508 chars]",
      },
      {
        source: {
          id: "ars-technica",
          name: "Ars Technica",
        },
        author: "Kyle Orland",
        title:
          "Reminder: Donate to win swag in our annual Charity Drive sweepstakes",
        description:
          "Add to a charity haul that's already raised over $17,000 in just a few weeks.",
        url: "https://arstechnica.com/gaming/2023/12/reminder-donate-to-win-swag-in-our-annual-charity-drive-sweepstakes-12/",
        urlToImage:
          "https://cdn.arstechnica.net/wp-content/uploads/2023/11/charity2023-1-760x380.jpg",
        publishedAt: "2023-12-14T15:56:33Z",
        content:
          "0\r\nIf you've been too busy mourning the death of E3 to take part in this year's Ars Technica Charity Drive sweepstakes, don't worry. You still have time to donate to a good cause and get a chance to … [+1928 chars]",
      },
      {
        source: {
          id: "ars-technica",
          name: "Ars Technica",
        },
        author: "Kyle Orland",
        title:
          "Reminder: Donate to win swag in our annual Charity Drive sweepstakes",
        description:
          "Add to a charity haul that's already raised over $14,000 in less than two weeks.",
        url: "https://arstechnica.com/gaming/2023/12/reminder-donate-to-win-swag-in-our-annual-charity-drive-sweepstakes-11/",
        urlToImage:
          "https://cdn.arstechnica.net/wp-content/uploads/2023/11/charity2023-760x380.jpg",
        publishedAt: "2023-12-08T19:41:47Z",
        content:
          "Enlarge/ Just some of the prizes you can win in this year's charity drive sweepstakes.\r\n1\r\nIf you've been too busy playing Against the Storm to take part in this year's Ars Technica Charity Drive swe… [+1984 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "prosen@insider.com (Phil Rosen)",
        title:
          "'We have no intention of selling': El Salvador's millennial president touts the country's bitcoin investment as the token soars",
        description:
          "Nayib Bukele said if El Salvador sold all its bitcoin at current prices, it would recover 100% of its investment and see a profit more than $3,600,000.",
        url: "https://markets.businessinsider.com/news/currencies/bitcoin-price-el-salvador-bukele-millennial-president-profits-crypto-btc-2023-12",
        urlToImage:
          "https://i.insider.com/656de75b58e7c0c29a29222b?width=1200&format=jpeg",
        publishedAt: "2023-12-04T15:52:51Z",
        content:
          "Bitcoin breached $42,000 on Monday for the first time in 20 months, and El Salvador's millennial president Nayib Bukele took to X to tout his country's investment in the crypto amid the big gains. \r\n… [+1237 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "prosen@insider.com (Phil Rosen)",
        title:
          "US stocks rise as Fed official gives investors more rate-cut optimism",
        description:
          "San Francisco Fed President Mary Daly said it's appropriate for the central bank to begin considering rate cuts in 2024.",
        url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-indexes-finance-investors-rate-cut-fed-2023-12",
        urlToImage:
          "https://i.insider.com/6581abfda79e5746976ade76?width=1200&format=jpeg",
        publishedAt: "2023-12-19T14:44:31Z",
        content:
          "US stocks climbed on Tuesday, following Monday's session that saw the Dow Jones hit a new record high.\r\nSan Francisco Fed President Mary Daly helped fuel the rally, as she told the Wall Street Journa… [+1182 chars]",
      },
      {
        source: {
          id: null,
          name: "NPR",
        },
        author: "David Gura",
        title:
          "After a brutal stretch, a remarkable thing is happening: Cryptocurrencies are surging",
        description:
          "Bitcoin and other digital currencies are rallying, emerging from a stormy period with the conviction that crypto is here to stay.",
        url: "https://www.npr.org/2023/12/26/1220603847/crypto-cryptocurrency-bitcoin-ftx-binance-cz-bankman-fried",
        urlToImage:
          "https://media.npr.org/assets/img/2023/12/25/gettyimages-1402675790_wide-eadf8676b64af620ebb4f8ae76eb29bc059f2598-s1400-c100.jpg",
        publishedAt: "2023-12-26T10:00:50Z",
        content:
          "A bitcoin ATM is seen in Brooklyn, N.Y., on June 13, 2022. Virtual currencies like bitcoin are recovering from a tough period partly on rising hopes that bad actors have been weeded out and that conf… [+6073 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "George Glover",
        title:
          "Charlie Munger was still a master of the one-liner in his 90s, calling crypto 'venereal disease' and AI overhyped",
        description:
          'The "Oracle of Pasadena" leaves behind decades\' worth of zingers, including savage takedowns of bitcoin and other cryptocurrencies.',
        url: "https://markets.businessinsider.com/news/stocks/charlie-munger-dies-warren-buffett-berkshire-hathaway-bitcoin-crypto-ai-2023-11",
        urlToImage:
          "https://i.insider.com/656702f5fd6200867dd073f4?width=1200&format=jpeg",
        publishedAt: "2023-11-29T10:28:52Z",
        content:
          "Legendary investor Charlie Munger died Tuesday aged 99.Nati Harnik/AP\r\n<ul>\n<li>Charlie Munger, who died Tuesday, was as well-known for his signature wit as he was for his investing success.</li>\n<li… [+3285 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Kiera Fields",
        title:
          "A lawsuit filed against a bitcoin mine in Texas has shed light on a growing trend: US crypto mines backed by millions of dollars from Chinese investors",
        description:
          "A rise in cryptocurrency mining facilities in Texas and other states has come under scrutiny for the industry's ties to Chinese investment.",
        url: "https://www.businessinsider.com/bitcoin-mine-texas-lawsuit-links-to-chinese-investors-2023-12",
        urlToImage:
          "https://i.insider.com/658acb99ec62ab5daf7ea6be?width=1200&format=jpeg",
        publishedAt: "2023-12-26T14:46:23Z",
        content:
          "The influx of Bitcoin facilities in Texas has raised annual power bills across the state.Photo by Mark Felix / AFP) (Photo by MARK FELIX/AFP /AFP via Getty Images\r\n<ul><li>Texas and other US states h… [+3401 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "George Glover",
        title:
          "From the stunning surge of the 'Magnificent 7' stocks to bitcoin's shock rebound, here are 8 of 2023's wildest markets stories",
        description:
          "Stocks defied Wall Street's gloomy predictions, bonds suffered a historic rout, and the US economy dodged a long-expected recession this year.",
        url: "https://markets.businessinsider.com/news/stocks/craziest-stories-bitcoin-russia-magnificent-seven-recession-bond-market-crash-2023-12",
        urlToImage:
          "https://i.insider.com/640b89ead81e7e0018be07d0?width=1200&format=jpeg",
        publishedAt: "2023-12-28T11:08:26Z",
        content:
          "Silicon Valley Bank's collapse in March was one of the defining markets stories of 2023.Getty Images\r\n<ul>\n<li>It's been another eventful year for markets.</li>\n<li>Stocks defied Wall Street's gloomy… [+7129 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Theron Mohamed",
        title:
          "'Rich Dad Poor Dad' author warns exploding US debt will fuel inflation and crush the dollar",
        description:
          "Robert Kiyosaki says the American government will print money aggressively to cover its spiraling debt costs, eroding the dollar's value.",
        url: "https://www.businessinsider.com/rich-poor-dad-kiyosaki-debt-inflation-dollar-market-crash-recession-2023-12",
        urlToImage:
          "https://i.insider.com/64b50a55dcdf1100194c22eb?width=1200&format=jpeg",
        publishedAt: "2023-12-07T10:54:06Z",
        content:
          '"Rich Dad Poor Dad" author Robert Kiyosaki.The Rich Dad Channel/YouTube\r\n<ul>\n<li>Robert Kiyosaki warned America\'s debt pile will fuel inflation and crush the US dollar.</li>\n<li>The government will … [+2813 chars]',
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Katherine Tangalakis-Lippert,Lloyd Lee",
        title:
          "Former Amazon engineer pleads guilty to stealing $12.3 million of crypto in first ever hacking case involving smart contracts",
        description:
          "A former Amazon engineer pleaded guilty to hacking two crypto exchanges and stealing $12.3 million in the first ever conviction involving smart contracts.",
        url: "https://www.businessinsider.com/amazon-engineer-hacking-cryptocurrency-nirvana-solana-what-are-smart-contracts-2023-12",
        urlToImage:
          "https://i.insider.com/657e49ed50edbc52a865111a?width=1200&format=jpeg",
        publishedAt: "2023-12-17T04:53:16Z",
        content:
          "Representation of Bitcoin is seen with binary code displayed on a laptop screenNurPhoto/Getty Images\r\n<ul><li>An ex-Amazon engineer pleaded guilty this week to hacking two cryptocurrency exchanges.</… [+3918 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Hasan Chowdhury",
        title:
          "Charlie Munger's last big call was probably right: AI is overhyped",
        description:
          "The legendary vice chair of Berkshire Hathaway, who passed away at the age of 99, was unconvinced by ChatGPT-fuelled hype.",
        url: "https://www.businessinsider.com/charlie-munger-may-have-been-right-about-ai-skepticism-2023-11",
        urlToImage:
          "https://i.insider.com/656723bffe5bc6545ebd3cd0?width=1200&format=jpeg",
        publishedAt: "2023-11-29T15:59:19Z",
        content:
          "Charlie Munger thought AI was overhyped. Nati Harnik/AP Photo\r\n<ul><li>Charlie Munger, who passed away Tuesday at the age of 99, had a last big call on AI: it's overhyped.</li><li>The legendary inves… [+3938 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Tom Carter",
        title: "The crypto bros are coming for AI",
        description:
          "It has been a bad year for crypto, with prices crashing and key figures like Sam Bankman-Fried going to jail. Experts say crypto influencers and startups have responded by pivoting hard toward AI.",
        url: "https://www.businessinsider.com/the-crypto-bros-are-coming-for-ai-2023-12",
        urlToImage:
          "https://i.insider.com/6583116acefc010bea258d17?width=1200&format=jpeg",
        publishedAt: "2023-12-23T10:00:01Z",
        content:
          "FTX founder Sam Bankman-Fried was found guilty of seven counts of fraud and conspiracy last month. Michael M Santiago/Getty Images\r\n<ul><li>It has been a bad year for crypto, with prices crashing and… [+6852 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Paul Starobin",
        title: "Ukraine's real power broker",
        description:
          "Is Andriy Yermak, Zelensky's right-hand man, handing war-torn Ukraine over to the oligarchs?",
        url: "https://www.businessinsider.com/ukraines-real-power-broker-yermak-zelensky-russia-war-biden-2023-12",
        urlToImage:
          "https://i.insider.com/657c771250edbc52a864be5a?width=1200&format=jpeg",
        publishedAt: "2023-12-18T10:53:01Z",
        content:
          "On a global corruption index, Ukraine ranks 116 out of 180 countries — not far in front of Russia, which clocks in at 137.Klawe Rzeczy for BI\r\nOn a Monday in late September, Mike Pyle, the point man … [+31117 chars]",
      },
      {
        source: {
          id: null,
          name: "ReadWrite",
        },
        author: "Radek Zielinski",
        title: "El Salvador Bitcoin bonds clear regulatory hurdle",
        description:
          "El Salvador’s ambitious plan to issue $1 billion in sovereign “Volcano Bonds” backed by Bitcoin has cleared a significant obstacle, […]\nThe post El Salvador Bitcoin bonds clear regulatory hurdle appeared first on ReadWrite.",
        url: "https://readwrite.com/el-salvador-bitcoin-bonds-clear-regulatory-hurdle/",
        urlToImage:
          "https://readwrite.com/wp-content/uploads/2023/12/El-Salvador-Bitcoin-bonds.jpg",
        publishedAt: "2023-12-12T19:30:08Z",
        content:
          "El Salvador’s ambitious plan to issue $1 billion in sovereign “Volcano Bonds” backed by Bitcoin has cleared a significant obstacle, bringing the pioneering offering closer to fruition, according to a… [+1954 chars]",
      },
      {
        source: {
          id: null,
          name: "ReadWrite",
        },
        author: "Radek Zielinski",
        title: "Bitcoin surges past $42,000 as crypto gathers momentum",
        description:
          "According to a Dec. 3 Bloomberg report, Bitcoin topped $42,000 on Monday, extending its rally of over 150% since the […]\nThe post Bitcoin surges past $42,000 as crypto gathers momentum appeared first on ReadWrite.",
        url: "https://readwrite.com/bitcoin-surges-past-42000-as-crypto-gathers-momentum/",
        urlToImage:
          "https://readwrite.com/wp-content/uploads/2023/12/Bitcoin-gathers-momentum.jpg",
        publishedAt: "2023-12-04T23:00:53Z",
        content:
          "According to a Dec. 3 Bloomberg report, Bitcoin topped $42,000 on Monday, extending its rally of over 150% since the start of 2023. The leading cryptocurrency is now at levels not seen since April 20… [+2202 chars]",
      },
      {
        source: {
          id: null,
          name: "ReadWrite",
        },
        author: "Cameron Macpherson",
        title: "Bitcoin price surges by 175% amid US ETF hopes",
        description:
          "The price of Bitcoin has seen its biggest value boost since the 2022 cryptocurrency market crash. On Wednesday (Dec. 6) […]\nThe post Bitcoin price surges by 175% amid US ETF hopes appeared first on ReadWrite.",
        url: "https://readwrite.com/bitcoin-sees-price-boost-of-175-in-crypto-market-surge/",
        urlToImage:
          "https://readwrite.com/wp-content/uploads/2023/12/bitcoin-2730220_1280.jpg",
        publishedAt: "2023-12-06T13:49:16Z",
        content:
          "The price of Bitcoin has seen its biggest value boost since the 2022 cryptocurrency market crash.\r\nOn Wednesday (Dec. 6) Bitcoin was trading above $44,000, a far cry away from the $17,000 it was trad… [+2003 chars]",
      },
    ],
  };

  // let responses
  const [search, setSearch] = useState("");
  const[value,setValue] = useState("")
  function handleSearch() {
     console.log(search);
      setValue(search)
  }
  const cardColors = [
    "lightred",
    "purple",
    "blue",
    "green",
    "orange",
    "indigo",
  ];
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();
  const [authUser, setAuthuser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthuser(user);
      } else {
        setAuthuser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  const userSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("Signout Succesfull!");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  function shuffleArray(array) {
      const newArray = [...array]; // Create a copy 
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    }

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchNews = async () => {
          console.log(value);
          var url =
            "https://newsapi.org/v2/everything?" +
            "q=" +
            value +
            "&pageSize=45&" +
            "language=en&" +
            "sortBy=popularity&" +
            "apiKey=9e79c371b4a6436b8d2e196640770b9f";

            var req = new Request(url);
            // let news = await fetch(req);
            // let responses = await news.json();
            
      //     console.log(responses);
          const shuffledArticles = shuffleArray(responses.articles);

      // Mapping the shuffled array to Card components
            const shuffledCards = shuffledArticles.map((article, index) => (
                  <Card
                  key={index}
                  title={article.title}
                  author={article.author}
                  description={article.description}
                  url={article.url}
                  content={article.content}
                  color={cardColors[getRandomInteger(0, 7)]}
                  image={article.urlToImage}
                  />
            ));
                  return shuffledCards
        };

        // Instead of directly returning JSX, update the state with the cards
        const fetchedCards = await fetchNews(); // Call the function to get cards
        setCards(fetchedCards); // Update state with the fetched cards
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [value]);

  return (
    <div>
      {authUser ? (
        <>
          <div>
            <nav className="navbar">
              <div className="navbar-container container w-full">
                <input type="checkbox" name="" id="" />
                <div className="hamburger-lines w-1/6">
                  <span className="line line1"></span>
                  <span className="line line2"></span>
                  <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                  <li className="mt-2">
                    <Link className="font-serif" to="/news">
                      Home
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link className="font-serif" onClick={userSignout}>
                      Signout
                    </Link>
                  </li>
                </ul>
                <div className="flex logo md:w-1/2 w-2/3">
                  <input
                    className="p-2 w-3/4"
                    type="text"
                    placeholder="Search"
                    onChange={(event) => setSearch(event.target.value)
                      }
                  ></input>
                  <button className="p-2 ml-3 w-1/4" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <br></br>
          <div className="mt-16 flex-col justify-center  ">
            <p className="font-bold text-2xl font-serif flex justify-center">Welcome to newsWoRLD </p>
            <strong className="font-serif hover-gradient flex justify-center text-1xl">{authUser.email}</strong>
          </div>
          <div>
            <div className="wrapper">
              {cards.length > 0 ? (
                cards // Render the cards array if available
              ) : (
                <p className="text-4xl justify-center font-bold font-serif hover:text-emerald-500 hover-gradient h-100vh mt-48">
                  Loading...
                </p> // Render a loading message while fetching data
              )}
            </div>
          </div>{" "}
        </>
      ) : (
        <>
          <div className="error_container bg-slate-300">
            <div className="error_wrapper">
              <div className="error_image_container">
                <img
                  src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  className="error_image"
                  alt="Problem"
                />
              </div>
              <div className="error_header">We are sorry, First You Signin</div>
              <div className="error_sub_heading">404 - Page Not Found</div>
              <div className="error_text">
                The page you are looking for might have been removed or is{" "}
                <br />
                temporarily unavailable.
              </div>
              <div className="error_link_container">
                <div className="error_go_back_button_wrapper">
                  <Link to="/signin" class="error_go_back_button">
                    Signin
                  </Link>
                  <Link className="error_go_back_button" to="/signup">
                    Signup
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default News;
