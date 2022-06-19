import React from "react";
import {
  AmountContainer,
  Button,
  Container,
  DetailsContainer,
  Form,
  FormContainer,
  Input,
  Label,
} from "./styles";

function Donate() {
  const [isOnce, setIsOnce] = React.useState(true);
  return (
    <Container>
      <DetailsContainer>
        <h3>Donate to Support this Network</h3>
        <p>
          "Giving does not only precede receiving; it is the reason for it. It is in giving that we
          receive" - Israelmore Ayivor
        </p>
        <img src="/assets/images/donation.jpeg" alt="" />
      </DetailsContainer>
      <FormContainer>
        <div className="header">
          <button className={isOnce ? "active" : ""} onClick={() => setIsOnce(true)}>
            GIVE ONCE
          </button>
          <button className={!isOnce ? "active" : ""} onClick={() => setIsOnce(false)}>
            MONTHLY
          </button>
        </div>
        <Form>
          <div>
            <Label>First Name</Label>
            <Input type="text" />
          </div>
          <div>
            <Label>Last Name</Label>
            <Input type="text" />
          </div>
          <div>
            <Label>Email Address</Label>
            <Input type="email" />
          </div>
          <div>
            <Label>Amount</Label>
            <AmountContainer>
              <select defaultValue={"NGN"}>
                <option value="NGN">NGN</option>
                <option value="USD">USD</option>
                <option value="AED">AED</option>
                <option value="ARS">ARS</option>
                <option value="AUD">AUD</option>
                <option value="BGN">BGN</option>
                <option value="BRL">BRL</option>
                <option value="BWP">BWP</option>
                <option value="CAD">CAD</option>
                <option value="CFA">CFA</option>
                <option value="CHF">CHF</option>
                <option value="CNY">CNY</option>
                <option value="COP">COP</option>
                <option value="CRC">CRC</option>
                <option value="CZK">CZK</option>
                <option value="DKK">DKK</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="GHS">GHS</option>
                <option value="HKD">HKD</option>
                <option value="HUF">HUF</option>
                <option value="ILS">ILS</option>
                <option value="INR">INR</option>
                <option value="JPY">JPY</option>
                <option value="KES">KES</option>
                <option value="MAD">MAD</option>
                <option value="MOP">MOP</option>
                <option value="MUR">MUR</option>
                <option value="MXN">MXN</option>
                <option value="MWK">MWK</option>
                <option value="MYR">MYR</option>
                <option value="NOK">NOK</option>
                <option value="NZD">NZD</option>
                <option value="PEN">PEN</option>
                <option value="PHP">PHP</option>
                <option value="PLN">PLN</option>
                <option value="RUB">RUB</option>
                <option value="RWF">RWF</option>
                <option value="SAR">SAR</option>
                <option value="SEK">SEK</option>
                <option value="SGD">SGD</option>
                <option value="SLL">SLL</option>
                <option value="THB">THB</option>
                <option value="TRY">TRY</option>
                <option value="TWD">TWD</option>
                <option value="TZS">TZS</option>
                <option value="UGX">UGX</option>
                <option value="VEF">VEF</option>
                <option value="XAF">XAF</option>
                <option value="XOF">XOF</option>
                <option value="ZAR">ZAR</option>
                <option value="ZMK">ZMK</option>
                <option value="ZMW">ZMW</option>
                <option value="ZWD">ZWD</option>
              </select>
              <input type="text"></input>
            </AmountContainer>
          </div>
          <Button type="submit">Donate Once</Button>
        </Form>
      </FormContainer>
    </Container>
  );
}

export default Donate;
