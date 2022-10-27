import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "semantic-ui-react";
import { deleteData, readData } from "../api/services";

export default function Read() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    readData().then((val) => setAPIData(val));
  }, []);

  const setData = (data) => {
    localStorage.setItem("id", data?.id);
    localStorage.setItem("data", JSON.stringify(data));
  };

  const onHandleDelete = (id) => {
    deleteData(id).then(() => {
      getList();
    });
  };

  function getList() {
    readData().then((val) => setAPIData(val));
  }
  return (
    <div>
      <div>
        <Link to="/create">
          <Button color="green">Add Range</Button>
        </Link>
      </div>
      <Table celled inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="12">WORKING HOURS</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Account Id</Table.HeaderCell>
            <Table.HeaderCell>Symbol</Table.HeaderCell>
            <Table.HeaderCell>Side</Table.HeaderCell>
            <Table.HeaderCell>Notional From</Table.HeaderCell>
            <Table.HeaderCell>Notional To</Table.HeaderCell>
            <Table.HeaderCell>Spread Percentil</Table.HeaderCell>
            <Table.HeaderCell>Edit</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.filter((obj) => obj.spreadType == "1").map((data, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell>{data?.accountId}</Table.Cell>
                <Table.Cell>{data?.symbol}</Table.Cell>
                <Table.Cell>
                  <label
                    style={{ color: data.side === "SELL" ? "red" : "green" }}
                  >
                    {data?.side}
                  </label>
                </Table.Cell>
                <Table.Cell active>{data?.notionalFrom}</Table.Cell>
                <Table.Cell active>{data?.notionalTo}</Table.Cell>
                <Table.Cell active>{data?.spreadPercentil} %</Table.Cell>
                <Table.Cell>
                  <Link to={`/update/${data?.id}`}>
                    <Button primary>Update</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button color="red" onClick={() => onHandleDelete(data.id)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <Table celled inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="12">NIGHT SHIFT</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Account Id</Table.HeaderCell>
            <Table.HeaderCell>Symbol</Table.HeaderCell>
            <Table.HeaderCell>Side</Table.HeaderCell>
            <Table.HeaderCell>Notional From</Table.HeaderCell>
            <Table.HeaderCell>Notional To</Table.HeaderCell>
            <Table.HeaderCell>Spread Percentil</Table.HeaderCell>
            <Table.HeaderCell>Edit</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.filter((obj) => obj.spreadType === "2").map(
            (data, index) => {
              return (
                <Table.Row key={index}>
                  <Table.Cell>{data.accountId}</Table.Cell>
                  <Table.Cell>{data.symbol}</Table.Cell>
                  <Table.Cell>
                    <label
                      style={{ color: data.side === "SELL" ? "red" : "green" }}
                    >
                      {data?.side}
                    </label>
                  </Table.Cell>
                  <Table.Cell active> {data.notionalFrom}</Table.Cell>
                  <Table.Cell active>{data.notionalTo}</Table.Cell>
                  <Table.Cell active>{data.spreadPercentil} %</Table.Cell>
                  <Table.Cell>
                    <Link to={`/update/${data?.id}`}>
                      <Button primary>Update</Button>
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Button color="red" onClick={() => onHandleDelete(data.id)}>
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            }
          )}
        </Table.Body>
      </Table>
    </div>
  );
}
