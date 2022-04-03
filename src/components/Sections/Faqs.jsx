import React from "react";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

function Faqs({ faqRef }) {
  return (
    <section ref={faqRef} className="faq-wrapper">
      <h2 className="faq-header">Frequently asked questions!</h2>
      <div className="faq-collapse">
        <Collapse
          expandIcon={({ isActive }) =>
            isActive ? <MinusOutlined /> : <PlusOutlined />
          }
          accordion
          className="collapse"
        >
          <Panel header="What are NFTs?" key="1">
            <p>
              {`NFT stands for “non-fungible token” which are unique digital items
              that are stored and encrypted on the blockchain that people can
              buy, own, and trade. NFTs can simply be digital art but can have
              various benefits. They can be treated like membership cards where
              holders get exclusive access to things like websites, events,
              merchandise, and more.`}
            </p>
          </Panel>
          <Panel header="When is the Launch date?" key="2">
            <p>11:00 am UTC, 10 April 2022</p>
          </Panel>
          <Panel header="What is the Supply and mint price?" key="3">
            <p>
              Only 10,000 EthDroids are available with Mint Price ( 0.09 ETH for
              troopers and 0.9ETH for our Heroes)
            </p>
          </Panel>
          <Panel header="How do I Buy an EthDroid?" key="4">
            <ol>
              <li>
                Sign up for Metamask or Coinbase Wallet and download the
                extension on your internet browser.
              </li>
              <li>
                Make sure you have enough Ethereum in your wallet to cover the
                total cost including gas fees.
              </li>
              <li>
                On mint day, there will be a Connect button at the top of our
                website to connect to your wallet.
              </li>
              <li>
                Click on the mint button and you will be prompted to sign for
                your transaction. There will be a fee associated with every
                transaction related to gas prices.
              </li>
              <li>
                Once you have made your purchase, your ETHDROIDS NFTs will
                appear in your wallet and on Opensea!
              </li>
            </ol>
          </Panel>
          <Panel header="Where can I contact if have more queries?" key="5">
            <p>For Queries and Business Enquiries: Contact@ethdroids.com</p>
          </Panel>
        </Collapse>
      </div>
    </section>
  );
}

export default Faqs;
