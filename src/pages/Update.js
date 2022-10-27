import { Button, Form } from "semantic-ui-react";
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getByIdData, updateData } from "../api/services";

export default function Update() {
  const [id, setID] = useState(null);
  const [data, setData] = useState({});
  let history = useHistory();
  let { slug } = useParams();

  useEffect(() => {
    getByIdData(slug).then((val) => setData(val));
  }, []);

  const handleSubmitForm = () => {
    updateData(data, data.id).then(() => {
      history.push("/");
    });
  };
  return (
    <div>
      <Form onSubmit={handleSubmitForm} className="create-form">
        <Form.Field>
          <label>Spread Type</label>
          <select
            required
            onChange={(e) => setData({ ...data, spreadType: e.target.value })}
            value={data.spreadType}
          >
            <option value="">Select...</option>
            <option value={1}>WORKING HOURS</option>
            <option value={2}>NIGHT SHIFT</option>
          </select>
        </Form.Field>
        <Form.Field>
          <label>Account Id</label>
          <input
            placeholder="Account Id"
            type={"number"}
            onChange={(e) => setData({ ...data, accountId: e.target.value })}
            value={data.accountId}
          />
        </Form.Field>
        <Form.Field>
          <label>Symbol</label>
          <div>
            <input
              placeholder="Symbol"
              onChange={(e) => setData({ ...data, symbol: e.target.value })}
              value={data.symbol}
            />
          </div>
        </Form.Field>
        <Form.Field>
          <label>Side</label>
          <select
            onChange={(e) => setData({ ...data, side: e.target.value })}
            value={data.side}
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
              placeholder="Notional From"
              type={"number"}
              onChange={(e) =>
                setData({ ...data, notionalFrom: e.target.value })
              }
              value={data?.notionalFrom}
            />
          </div>
        </Form.Field>
        <Form.Field>
          <label>Notional To</label>
          <div>
            <input
              placeholder="Notional To"
              type={"number"}
              onChange={(e) => setData({ ...data, notionalTo: e.target.value })}
              value={data.notionalTo}
            />
          </div>
        </Form.Field>
        <Form.Field>
          <label>Spread Percentil</label>
          <div>
            <input
              placeholder="Spread Percentil"
              type={"number"}
              onChange={(e) =>
                setData({ ...data, spreadPercentil: e.target.value })
              }
              value={data?.spreadPercentil}
            />
          </div>
        </Form.Field>
        <Button type="submit">Update</Button>
      </Form>
    </div>
  );
}
