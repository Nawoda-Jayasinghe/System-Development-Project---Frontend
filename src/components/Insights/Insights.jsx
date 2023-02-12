import React from "react";

import { useState, useEffect } from "react";
import Header from "../Dashboard/Header";
import InsightItem from "./InsightItem";
import axios from "axios";

const Insights = () => {
  const [insightsOne,setInsightsOne] = useState([]);
  const [insightsTwo,setInsightsTwo] = useState([]);
  const [insightsThree,setInsightsThree] = useState([]);
  const [insightsFour,setInsightsFour] = useState([]);

  //Inights One
  useEffect(() => {
    axios.get("http://localhost:3500/predictions/getBestProjectTypeToExecute").then(res => {
      if(res.data.result){
        setInsightsOne(res.data.processedData)
      }
    })
  },[])

  //Inights Two
  useEffect(() => {
    axios.get("http://localhost:3500/predictions/getBestMemberToAssignWork").then(res => {
      if(res.data.result){
        setInsightsTwo(res.data.processedData)
      }
    })
  },[])

  //Inights Three
  useEffect(() => {
    axios.get("http://localhost:3500/predictions/getBestDistrictToFocusForDonations").then(res => {
      if(res.data.result){
        setInsightsThree(res.data.processedData)
      }
    })
  },[])

  //Inights Four
  useEffect(() => {
    axios.get("http://localhost:3500/predictions/getBestCountryToFocusForDonations").then(res => {
      if(res.data.result){
        setInsightsFour(res.data.processedData)
      }
    })
  },[])

  return (
    <div className="w-full flex flex-col justify-start items-center min-h-screen bg-[#F3F4FF] pb-10">
      <div className="flex w-11/12 justify-between items-center mt-12">
        <h2 className="font-bold text-4xl leading-10 text-[#303972]">
          Insights
        </h2>
        <Header />
      </div>
      <InsightItem
        title={"Best project type to execute next"}
        itemOneImge={
          "https://twproject.com/blog/wp-content/uploads/2022/06/Project-management-plan.png"
        }
        itemOneTitle={insightsOne[0]?.projectType}
        itemOnePercentage={insightsOne[0]?.donorEnagement+"%"}

        itemTwoImge={
          "https://twproject.com/blog/wp-content/uploads/2022/06/Project-management-plan.png"
        }
        itemTwoTitle={insightsOne[1]?.projectType}
        itemTwoPercentage={insightsOne[1]?.donorEnagement+"%"}
        itemThreeImge={
          "https://twproject.com/blog/wp-content/uploads/2022/06/Project-management-plan.png"
        }
        itemThreeTitle={insightsOne[2]?.projectType}
        itemThreePercentage={insightsOne[2]?.donorEnagement+"%"}
      />
      <InsightItem
        title={"Best team member to assign work"}
        itemOneImge={
          "https://twproject.com/blog/wp-content/uploads/2022/06/Project-management-plan.png"
        }
        itemOneTitle={insightsTwo[0]?.user}
        itemOnePercentage={insightsTwo[0]?.countOfCompletedTasks.toFixed(0)+"%"}
        itemTwoImge={
          "https://twproject.com/blog/wp-content/uploads/2022/06/Project-management-plan.png"
        }
        itemTwoTitle={insightsTwo[1]?.user}
        itemTwoPercentage={insightsTwo[1]?.countOfCompletedTasks.toFixed(0)+"%"}
        itemThreeImge={
          "https://twproject.com/blog/wp-content/uploads/2022/06/Project-management-plan.png"
        }
        itemThreeTitle={insightsTwo[2]?.user}
        itemThreePercentage={insightsTwo[2]?.countOfCompletedTasks.toFixed(0)+"%"}
      />
      <InsightItem
        title={"Best district to focus for donations"}
        itemOneImge={
          "https://twproject.com/blog/wp-content/uploads/2022/06/Project-management-plan.png"
        }
        itemOneTitle={insightsThree[0]?.district}
        itemOnePercentage={insightsThree[0]?.donorEnagement+"%"}
        itemTwoImge={
          "https://twproject.com/blog/wp-content/uploads/2022/06/Project-management-plan.png"
        }
        itemTwoTitle={insightsThree[1]?.district}
        itemTwoPercentage={insightsThree[1]?.donorEnagement+"%"}
        itemThreeImge={
          "https://twproject.com/blog/wp-content/uploads/2022/06/Project-management-plan.png"
        }
        itemThreeTitle={insightsThree[2]?.district}
        itemThreePercentage={insightsThree[2]?.donorEnagement+"%"}
      />
      <InsightItem
        title={"Best country to focus for donations"}
        itemOneImge={
          "https://twproject.com/blog/wp-content/uploads/2022/06/Project-management-plan.png"
        }
        itemOneTitle={insightsFour[0]?.country}
        itemOnePercentage={insightsFour[0]?.donorEnagement+"%"}
        itemTwoImge={
          "https://twproject.com/blog/wp-content/uploads/2022/06/Project-management-plan.png"
        }
        itemTwoTitle={insightsFour[1]?.country}
        itemTwoPercentage={insightsFour[1]?.donorEnagement+"%"}
        itemThreeImge={
          "https://twproject.com/blog/wp-content/uploads/2022/06/Project-management-plan.png"
        }
        itemThreeTitle={insightsFour[2]?.country}
        itemThreePercentage={insightsFour[2]?.donorEnagement+"%"}
      />
    </div>
  );
};

export default Insights;
