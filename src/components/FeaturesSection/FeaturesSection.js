import React, { Component } from "react";

class FeaturesSection extends Component {
  render() {
    return (
      <section id="two" className="wrapper style3 fade-up">
        <div className="inner">
          <h2 style={{ textAlign: "center" }}>WHY CUSTOMERS CHOOSE US</h2>
          <h3 style={{ textAlign: "center" }}>
            At Elite Bank, we are committed to providing world-class customer
            support on all products offered, together with the best technological
            tools to make your banking experience the best it has ever been
          </h3>
          <div className="features">
            <section>
              <span className="icon solid major fa-code"></span>
              <h3>Investment</h3>
              <p>
                Maximize the return of your money with investment opportunities managed by professionals
              </p>
              <ul>
                <li>Asset sales and participation</li>
                <li>Security Investments through a third-party provider (First quarter 2024)</li>
              </ul>
            </section>
            <section>
              <span className="icon solid major fa-lock"></span>
              <h3>Secure</h3>
              <p>
                Your security is paramount. Our website utilizes advanced encryption and
                security measures to protect your sensitive information.
                You can bank online with confidence, knowing that your data is secure
              </p>
            </section>
            <section>
              <span className="icon solid major fa-cog"></span>
              <h3>Customer Forms</h3>
              <p>Apply online for the openings of accounts with forms for individuals and corporate customers</p>
              <ul>
                <li>Personal Accounts</li>
                <li>Commercial Accounts</li>
              </ul>
            </section>
            <section>
              <span className="icon solid major fa-desktop"></span>
              <h3>Deposits</h3>
              <p>Optimize your savings approach with the help of a global team of professionals</p>
              <ul>
                <li>Checking and Savings Accounts</li>
                <li>Certificates of Deposits</li>
                <li>Online Banking</li>
                <li>Phone Banking</li>
                <li>Remote Deposit Capture</li>
              </ul>
            </section>
            <section>
              <span className="icon solid major fa-link"></span>
              <h3>Lending</h3>
              <p>
                Our credit and Lending products are tailored for you and coordinate almost any type or scale of corporate flow.
              </p>
              <ul>
                <li>Commercial Loans</li>
                <li>Mortgage Loans</li>
                <li>Trade Finance Loans</li>
                <li>Asset-based Lending</li>
                <li>Factoring</li>
                <li>Letters of Credit</li>
              </ul>
            </section>
            <section>
              <span className="icon major fa-gem"></span>
              <h3>Results</h3>
              <p>To be the bank that our customers need, our employees embrace and our shareholders feel proud of.</p>
            </section>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturesSection;