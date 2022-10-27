import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { postData } from "../api/services";

export default function Create() {
  const [formData, setFormData] = useState({
    spreadType: 0,
    accountId: "",
    symbol: "",
    side: "",
    notionalFrom: "",
    notionalTo: "",
    spreadPercentil: "",
  });

  let history = useHistory();

  const onHandleSubmitForm = () => {
    postData(formData).then(() => {
      history.push("/");
    });
  };

  return (
    <div>
      <Form onSubmit={onHandleSubmitForm} className="create-form">
        <Form.Field>
          <label>Spread Type</label>
          <select
            required
            onChange={(e) =>
              setFormData({ ...formData, spreadType: e.target.value })
            }
          >
            <option value="">Select...</option>
            <option value={1}>WORKING HOURS</option>
            <option value={2}>NIGHT SHIFT</option>
          </select>
        </Form.Field>
        <Form.Field>
          <label>Account Id</label>
          <input
            type={"number"}
            placeholder="Account Id"
            onChange={(e) =>
              setFormData({ ...formData, accountId: e.target.value })
            }
          />
        </Form.Field>
        <Form.Field>
          <label>Symbol</label>
          <div>
            <input
              type={"text"}
              placeholder="Symbol"
              onChange={(e) =>
                setFormData({ ...formData, symbol: e.target.value })
              }
            />
          </div>
        </Form.Field>
        <Form.Field>
          <label>Side</label>
          <select
            onChange={(e) => setFormData({ ...formData, side: e.target.value })}
          >
            <option value="">Select...</option>
            <option value="BUY">BUY</option>
            <option value="SELL">SELL</option>
          </select>
        </Form.Field>
        <Form.Field>
          <label>Notional From</label>
          <div>
            <input
              type={"number"}
              placeholder="Notional From"
              onChange={(e) =>
                setFormData({ ...formData, notionalFrom: e.target.value })
              }
            />
          </div>
        </Form.Field>
        <Form.Field>
          <label>Notional To</label>
          <div>
            <input
              type={"number"}
              placeholder="Notional To"
              onChange={(e) =>
                setFormData({ ...formData, notionalTo: e.target.value })
              }
            />
          </div>
        </Form.Field>
        <Form.Field>
          <label>Spread Percentil</label>
          <div>
            <input
              type={"number"}
              placeholder="Spread Percentil"
              onChange={(e) =>
                setFormData({ ...formData, spreadPercentil: e.target.value })
              }
            />
          </div>
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
