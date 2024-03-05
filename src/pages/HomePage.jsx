import React from 'react'
import NavBar from '../components/NavBar'
import Graph  from "../Assets/graph.png"
import Range from "../Assets/meter.png"
const HomePage = () => {
  return (
    <div>
      <NavBar/>

      <div className='border border-black mx-5 flex'>

        <div className='main-container border border-black w-8/12'>
          
          {/* coin container */}
          <div className='coin-container  border border-black m-3'>

            {/* coin name and rank */}
            <div className='coin-details flex items-center gap-5'>
              <div className='font-bold w-[160px] h-[32px]'>
                  <span className='text-[24px]'>Bitcoin</span> <span className=' text-[#5D667B] text-[16px] font-semibold leading-[19.2px]'>BTC</span>
              </div>
              <div className='rank flex justify-center items-center'><p>Rank #1</p></div>
            </div>

            {/* coin price and chart */}
            <div>
               {/* coin price inr rs */}
              <div className='flex'>
                  <div> 
                    <h1>$46,953</h1>
                    <h2>₹39,42,343</h2>
                  </div>

                  <div className='flex'>
                    <p>^ 2.51%</p>
                    <p>(24H)</p>
                  </div>
              </div>

               {/* line */}
              <div></div>

               {/* chart */}
              <div className='flex flex-col gap-[3rem]'>
                <div className='flex justify-between'>
                  <p>Bitcoin Price Chart (USD)</p>
                  <div>
                    <ul className='flex'>
                      <li>1H</li>
                      <li>24H</li>
                      <li>7D</li>
                      <li>1M</li>
                      <li>3M</li>
                      <li>6M</li>
                      <li>1Y</li>
                      <li>ALL</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <img src={Graph} alt='graph'/> 
                </div>
              </div>
 
            </div>
          </div>

          {/* overview */}
          <div>
            
            {/* overview column */}
            <div>
              <ul className='flex justify-evenly'>
                <li><a>Overview</a></li>
                <li><a>Fundamentals</a></li>
                <li><a>News Insights</a></li>
                <li><a>Sentiments</a></li>
                <li><a>Team</a></li>
                <li><a>Technicals</a></li>
                <li><a>Tokenomics</a></li>
              </ul>
            </div>

            {/* performance section */}
            <div className='border border-black m-5'>
              <h1>Performance</h1>
              <div>
                <div className='flex items-center justify-around'>
                  <div className=''>
                    <p>Today's Low</p>
                    <p>46,930.22</p>
                  </div>

                  <div>
                    <img src={Range} alt='range'/>
                  </div>
                  
                  <div>
                    <p>Today's High</p>
                    <p>49,343.83</p>
                  </div>
                </div> 
                <div className=' flex items-center justify-around'>
                  <div className=''>
                      <p>52W Low</p>
                      <p>16,930.22</p>
                    </div>

                    <div>
                      <img src={Range} alt='range'/>
                    </div>
                    
                    <div>
                      <p>52W High</p>
                      <p>49,743.83</p>
                    </div>
                </div>
              </div>
            </div>

            {/* Fundamentals section */}

            <div>
              <h1>Fundamentals <span>i</span></h1>

              <div className='flex'>
                  <table>
                    <tr>
                      <td>Bitcoin Price</td>
                      <td>$16,815.46</td>
                    </tr>
                    <tr>
                      <td>24h Low / 24h High</td>
                      <td>$16,382.07 / $16,874.12</td>
                    </tr>
                    <tr>
                      <td>7d Low / 7d High</td>
                      <td>$16,382.07 / $16,874.12</td>
                    </tr>
                    <tr>
                      <td>Trading Volume</td>
                      <td>$23,249,202,782</td>
                    </tr>
                    <tr>
                      <td>Market Cap Rank</td>
                      <td>#1</td>
                    </tr>
                  </table>

                  <table>
                    <tr>
                      <td>Market Cap</td>
                      <td>$323,507,290,047</td>
                    </tr>
                    <tr>
                      <td>Market Cap Dominance</td>
                      <td>38.343%</td>
                    </tr>
                    <tr>
                      <td>Volume / Market Cap</td>
                      <td>0.0718</td>
                    </tr>
                    <tr>
                      <td>All-Time High</td>
                      <td>
                        <tr>$69,044.77 -75.6%</tr>
                        <tr>Nov 10, 2021 (about 1 year)</tr>
                      </td>
                    </tr>
                    <tr>
                      <td>All-Time Low</td>
                      <td>
                        <tr>$67.81 24729.1%</tr>
                        <tr>Jul 06, 2013 (over 9 years)</tr>                        
                      </td>

                    </tr>
                  </table>
              </div>
            </div>
          </div>

        </div>

         <div className='side-container border border-black'>
             side container
         </div>
      </div>
    </div>


  )
}

export default HomePage