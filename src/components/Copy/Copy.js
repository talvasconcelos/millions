import React from 'react'

const Copy = props => (
  <div className='article'>
    <h3>What is EuroMillions?</h3>
    <p>EuroMillions is a transnational lottery, launched on 7 February 2004. Draws are held every Tuesday and Friday night at 19:45 (UTC) in Paris. A standard EuroMillions ticket costs €2.50, £2.50 or CHF3.50 per line played, depending on the local currency.</p>
    <p>The player selects five main numbers which can be any number from 1 to 50 and two different lucky stars from a pool of 12 numbers.</p>
    <p>A Euro Millions player must be a permanent resident in a member country in order to purchase a ticket in the country and in order to collect a prize.</p>

    <h3>How many possible combinations?</h3>
    <p>There are 2.118.760 possible numbers combinations and 66 for the stars. The amount of all possible combinations with 5 numbers and 2 lucky stars are C(50,5)*C(12,2) = 2.118.760 * 66 = 139.838.160.</p>
    <p>When you click the Generate button above, you'll get five possible keys. The keys are pulled from a pool of almost 800.000 possible number combinations (see the method bellow) and the two Lucky Stars are added randomly.</p>

    <h3>So how can I increase the chances to win the EuroMillions game?</h3>
    <p>Just click on the red button above and have 5 keys generated for you, based on the patterns described bellow.</p>

    <h3>How are the keys calculated?</h3>
    <p>The high odds make the chances to win the game very low. The keys are calculated based on some statistical analysis of the previous draws. So you can play the game smarter and increase your chances to win the EuroMillions game.</p>
    <h4>Removed all sequential keys</h4>
    <p>From the 2118760 possible combinations for the numbers alone, we removed all the keys with sequential occurence.</p>
    <h4>Removed all odd or all even numbers</h4>
    <p>We then removed all the combinations that had all even or odd numbers. Let then 3% of the past draws as this occured. It's best to have mix of 2/3. Meaning 3 odd and 2 even numbers or vice-versa. This pattern occurs 68% of the times.</p>
    <h4>Removed numbers from the same number group</h4>
    <p>Combinations with only 20's or only 30's were removed. </p>
    <h4>The sum of the numbers are important</h4>
    <p>In 70% of the draws, the sum of all the 5 combination numbers are between 95 and 160. Based on that we removed all the combinations that didn't meet this requirement.</p>
    <h4>Lucky Stars</h4>
    <p>The Lucky Stars on our generator are randomly added to the number combinations.</p>




  </div>
)

export default Copy
