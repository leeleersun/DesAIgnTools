import React, { useEffect, useState } from "react";
import { Avatar, List, Card, Tag, Divider } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "../css/Tools.module.css";
import toolsJson from "../assets/tools.json";
import { useDispatch, useSelector } from "react-redux";

const colorArr = ["#078DB8", "#E9680B", "#F9D068", "#22FA51", "#7E8385"];
const Tools = () => {
  const [data, setData] = useState([]);

  const { requirementType, problemType, thoughtType, modelType, testType } =
    useSelector((state) => state.tool);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // toolsJson.sort((a, b) => {
        //     return a.inputType - b.inputType;
        //   });
        const inputArray = [
          requirementType,
          problemType,
          thoughtType,
          modelType,
        ];
        const outputArray = [problemType, thoughtType, modelType, testType];
        if (inputArray.filter((item) => item !== "").length !== 0) {
          const filteredArray = toolsJson.filter(
            (item) =>
              inputArray.indexOf(item.input) !== -1 &&
              (outputArray[inputArray.indexOf(item.input)] === item.output ||
                outputArray[inputArray.indexOf(item.input)] === "")
          );
          console.log(inputArray, outputArray);
          filteredArray.sort((a, b) => {
            return a.inputType - b.inputType;
          });
          setData(filteredArray);
        } else {
          setData(toolsJson);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [requirementType, problemType, thoughtType, modelType, testType]);
  return (
    <div>
      <Card
        style={{
          "border-radius": "0px",
          "font-size": "20px",
          "text-align": "center",
        }}
      >
        <p>DesAIgn Tools List</p>
      </Card>
      <InfiniteScroll dataLength={data.length} scrollableTarget="scrollableDiv">
        <List
          className={styles.listContainer}
          itemLayout="vertical"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item className={styles.listItem}>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={
                      item.avatar === ""
                        ? `https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg`
                        : item.avatar
                    }
                  />
                }
                title={
                  <a href={item.href} target={"_blank"}>
                    {item.title}
                  </a>
                }
                description={item.brief}
              />
              <div className={styles.tagSvgContainer}>
                <Tag
                  color={colorArr[(item.inputType % colorArr.length) - 1]}
                  style={{ cursor: "pointer" }}
                >
                  {item.input}
                </Tag>
                <svg
                  t="1703834295961"
                  class="icon"
                  viewBox="0 0 1433 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="20162"
                  width="30"
                  height="30"
                >
                  <path
                    d="M0 614.4h1024l-256 256 153.6 153.6 512-512L921.6 0l-153.6 153.6 256 256H0z"
                    fill="#7dc5eb"
                    p-id="20163"
                  ></path>
                  <path
                    d="M409.6 409.6v204.8H0V409.6z"
                    fill="#333333"
                    p-id="20164"
                  ></path>
                </svg>
                <Tag
                  color={colorArr[(item.outputType % colorArr.length) - 1]}
                  style={{ cursor: "pointer" }}
                >
                  {item.output}
                </Tag>
                <Divider type="vertical" className={styles.divider} />
                <Tag color={item.openSource === "已开源" ? "green" : "red"}>
                  {item.openSource}
                </Tag>
              </div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default Tools;
