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
          "https://www.myperfectresume.com/wp-content/uploads/2020/05/describe-your-educational-background.jpg"
        }
        itemOneTitle={insightsOne[0]?.projectType}
        itemOnePercentage={insightsOne[0]?.donorEnagement+"%"}

        itemTwoImge={
          "https://thumbs.dreamstime.com/b/earth-hands-environment-concept-grass-background-usa-38622929.jpg"
        }
        itemTwoTitle={insightsOne[1]?.projectType}
        itemTwoPercentage={insightsOne[1]?.donorEnagement+"%"}
        itemThreeImge={
          "https://hbr.org/resources/images/article_assets/2019/10/Oct19_22_1032609198.jpg"
        }
        itemThreeTitle={insightsOne[2]?.projectType}
        itemThreePercentage={insightsOne[2]?.donorEnagement+"%"}
      />
      <InsightItem
        title={"Best team member to assign work"}
        itemOneImge={
          "https://i.pinimg.com/1200x/f5/1c/39/f51c39af2044673d6b03be41a94a5470.jpg"
        }
        itemOneTitle={insightsTwo[0]?.user}
        itemOnePercentage={insightsTwo[0]?.countOfCompletedTasks.toFixed(0)+"%"}
        itemTwoImge={
          "https://i.pinimg.com/200x/92/8f/c8/928fc874edae45b141ac45bdc157a70b.jpg"
        }
        itemTwoTitle={insightsTwo[1]?.user}
        itemTwoPercentage={insightsTwo[1]?.countOfCompletedTasks.toFixed(0)+"%"}
        itemThreeImge={
          "https://i.pinimg.com/200x/c7/0c/36/c70c3652b86753708079b17e9033c488.jpg"
        }
        itemThreeTitle={insightsTwo[2]?.user}
        itemThreePercentage={insightsTwo[2]?.countOfCompletedTasks.toFixed(0)+"%"}
      />
      <InsightItem
        title={"Best district to focus for donations"}
        itemOneImge={
          "https://flowcon.com/fileadmin/user_upload/Pictures/Projects/FlowCon-Project-Colombo-City-Centre.jpg"
        }
        itemOneTitle={insightsThree[0]?.district}
        itemOnePercentage={insightsThree[0]?.donorEnagement+"%"}
        itemTwoImge={
          "https://www.onthegotours.com/blog/wp-content/uploads/2013/01/kandycitylake.jpg"
        }
        itemTwoTitle={insightsThree[1]?.district}
        itemTwoPercentage={insightsThree[1]?.donorEnagement+"%"}
        itemThreeImge={
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhYZGRgaGBwaHBocGhwYHBwcGBkaGhwaGhwcIS4lHB4rIRoaJjgmKy8xNTU1HCQ7QDszPy40NTEBDAwMEA8QHhISHzUrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAO4A1AMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EADwQAAIBAwMDAgQEBAUDBAMAAAECEQADIQQSMQVBUSJhMnGBkQYTobFSYsHwFELR4fEjcrIVM4LCFmOi/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJxEAAgIDAAICAQMFAAAAAAAAAAECERIhMQNBUWETInGBBEKRocH/2gAMAwEAAhEDEQA/AKHbFOAo+70592FMHgx5q46T0qHUNbmYyV47k16EvLFKzz4+GTdFVoOkvcn/ACgAmSMY8ntV5p/wTdYA/mIBHMMc9hHj3/Q1vbGgTaAyj5e/v70baAjHFcM/6qTejsj/AE0UtmD/AA7oLlgul0bBu4nkiPUO0cZrcWLwIEUF1vQi4sjDDgj5jnzVbvZAAD/fesZSz37NYxxVGj/MrguDiqbp/UQwyDkwJFS3NRtde37HtFRXovVFrFRO0U788bZoJr8mkkMkuXajFw0O5JNEWUpoQTbFPIpimuscUUFnGaobk7TAmnW8k/If1ohadUBlD0p797a5ZFAmQPlAE4mrn/8AGtMQAULR3LtJ9zBAq0Bp6iqc5eicUAN0HTER+Un2o21YVAFVQAOABU1dFS237DhALCht0ZqQ0+mxUsLOLTia4K7FAEDIOTk9vaqzWdHV2BYkgdsVbuk00g01Jrg9Mh/L96VT7KVBVlRpkSAABjijGCgDGRn7VSfhf/2VYmSxJ5kDOAPFW14U5adEx2rE+oijNM4NAPbET3ovRuIqWNhhFDvpUblQf771MzxULPRYkmdt6VFEKoArp06EyVBI8inI2K6DRYbO/ljxUF3TrJMZogGmXGimJARsZp60nekpqkhsdFV/W9YtpAzlxLAeiJ8xLYAxVmBWZ1/VZf0qSEPpMCMYLAn+lMC16Vqg4LBSuByZnn3o9apbPXWAhrRP1z+1XOmuBlDCRPY4P1qVfsbJ0FSAU0NXd1Inp0tSDUOz00XKRWIZSqG3cmpQaLJao7SpUqYhUqVKgBUqVKgCj0GnCKFUQAIA8URcNQpdik9zFDNFo7vnFE6ZSBQ2kG5qsgoFJgDuCTzXUTzTbjhe9OW6sc0hk0gVKKrrb7nicDNGrdHFAmiQmKY4kVFcvDzTPz6YqGlKcFritREVVhRGhoOxpUJJIEy370L1rrCacje3MnauWOOI7DIzWNP4mcuzL8JYkCYif61aRLPRWtIBOKehxWB0n4keDIkGRhhPHMEc57VfaDrP5rYEemYmREicwD9KTY0i9N6on1PvQFy/NRbyahjRYi9XVaaEtCj7KUmMnsiihUSipBSJkdpVykTTsVHaVNmu0WFHaVKuUxGZe4BUdu5PehdxJip7aximUW2muBRU51Qqnv3SBXLNw1NFWSa66xaaCbUsOaPdhEmgLonFNCCrGuAHv3qU6tjwKBs2IqzspQ6GDG+e9T271S3NNNQmzFKwDdO9HBqrbIoxDTAwP490Lfm7/wDKwAHsVER+xrGattiq0TuYDJOJr0D8f3PSgJ/iPv2rIjbAnxOTWiWiGds6ANkeY/rV50jprowcE/FE/Qkz5GKrNCqNMgTPyrT9E08bocggDEkiCTIKn7A1M6o0jZZqtTW7dSW7dF27FS2IjRKKtJFTW7MVIEqRWhq09a4RTQ+YoE9khpVwmuTToDsV2K6KVCQhUqVKmKzHInep1SaKt2KPsaceKGy0iq/whcx271HqbJQwDWiSyBwKG1ej3kGKVgZ+TUlu0TVo3TwOKJsaYChsdFYlmi7aUd+UPFdCClYyFFxTXQUTtpjJQgB1EU6TFcZTNduP6SKoRg/x3eG5JI4MT5JED9KzbMAo+Qq4/Hq7ntj+EBj9Gas++YzWkeEvpedIG5SwEw0cAyCMjJgA/wBxyNJ0QEs2MFMT8x/vkAccGst0diqtHkfP2IM4rRdBb/r/ABZKvjI8HgxBwZHOKzn7NI8NbZSjEFQ2eBUrXAOSKRJMtdJoS1rVZiq5I59qqOr9WZG2L/zVRi5OjNtJWwrqfUGQwFJngjzTOjal3LF1YNkSfhAxge8z9qrNHdd3VSDEwcTHvWrt2gBAFXJKKqtkp279HAlSAV2lWVFtipUqVMQqVcmlRYUV1kgiiLdDadYoqYqGakhNKaGuXxUB1FOhUGMaW6gfz6Y2ooooN/PExTw4qsW5miLbT3ooQbNdNNQU+KQMF1LhVLEwBWa1PWV3Qpn3rVXbYYQRNZ7X9CTeHUBR3A+ua28bj/cRLKtGE/FWq33l9kH7k1WKBVl+JEC6hl8Ko/8A5BoBEMT3rR16JV0WXTMK7EwFg8lcQZJyJA7irfoupBuoyZyRyGPwMIkHA4GT2FU+k2/lXQTEoVHzZWE/KSOP1qT8JaZrbkMQJdIw2cMDyB7VhPrRtDiNtq+r7FheQYjxQdrX3Xg7GYMYEDuOa0Wk6fbIDFAT55n5+aMeyQoVIQD27eB4rSM4qK0YzUnJ7M1qdTcRfg2FsySMxmBBo7pHTN4F65knIXgexJ71ZP05HUK43QZGSM/SjVgCB2pvyapdJx3sSWwOABTqbuqC7qQKysumE0qBXWU5tVQGIVNMZ6Ge4a7aG40ikkiT8ylUn5S+KVILRU2tQKVzVCsumrautrWqsRZGgS8DzUdzUDzVC3UGqA6w1VCyNC2pqI6qqM6o1xb5ooeRo7V6aOsMaz2lvVd6bUCOaloaZaIxqdTQlm4Kne4AJqCmJx70NqVxzUqXg3FR6hhHNWuifDyn8UGdTc9to+yLVb+d7UT+IL86u4sZLNnxtxH6UIz4zA7Z/bNaWSE6RmYN7QYE++CfHNXOgvFWQAiN4IgSDDL354PiMfap6UMPO0QBzPM44/rVq7bQh55hl9O6PVkfTt5zkYiRpE9L0D42+KKW6CSJyORVdoAYJH996VlHLFm/3+U1MVaJkv1FoXqNnnimqZFMLRQwSRxjQl9hTrl0mhnNCQ2ItXUeo6RaOcCqogme+FEsQB5PFQf+sIrhCSCeCRCn5Hv+3aqnrHWbKWnJZXlT6QwG6cfF2+Yrz7/1J1LquCAGWIf0sRID8jkHyIoekLI9oGrPmlWB6X14lMOogwS+8liAJZSMbe3zBpVWKCy/HTye1NbpRowXzUb6szUWyqQA3TTXG6YfFWK6iirdyaeTFiiiHTq7/wCnT2NaJI8USHHik5MeJmE6c47Gi7Vhh2rQWrgao7qZosdAlhDUtzUQINNuXCpihrik0JCsMtvIwKhvDJrouqgyYig7/UlJgU10GeU9c1KrqbjxuJdxA5gu36/6UDqdSXWACCOxwQRMBfnP94qPqTk3bhRSzM7erIgkkmAOT70G7lCAz+qZMS2eYB/ipSi27Et6NDptb+W0kMFICs44DfUifnV8bxKAqA2DgODhu/EDI+uZ81mNBaJfayAow5yxMmN0H9fEe1Xmg1NsRaycsPikiZkS3EeZ7TSt+zWJ6d0N5X5qpPzIz86tyKz34cf0J7ov1gRV+GqY8J8i/UQNTQorr3AKoh+KLP5j22JVlE5HI4xVisuHUCoiAalS4j5VgTAMTkTUb4oAjuECgNbaR0ZXI2x6sxx5Pasx+KupRuQXEKsPh447bgeZ+v2rJvqyGYFmh02tMqTuA2z/ABQwXPyHearjIbLXrXVNM29LWnNw5lp2L6F2lgIJgD5dqxxvneCqhAOAWZgRlT6icg5EjGKtdE5ey9tTt3t6yASz7iAlpYEgFgXb2U+CDU3tI8yfYA8CNoiI7FYI8gzVvhIXYBIlSkfzIZ4Hz/elRWna8RKruHlrStnvtPiZP1NKs7fyPR6kitUq255FTNj/ADU5XFKmVaGpaHiiVtimBhTVvZwaKHYbaSh9TbacU23qge9I3x5orY7ILbsDNTP1AIV3MAScAkcnionuT3rHdb6pbcsv5O8JINxmKAHjBAz+8cCm+E2aS31tGPrMOXKbR/EDEDx5g8VaWXBxXnHRNeC7lCXuKREmNwMBiFJluB3n4eTxsNB1BWMQytElWUqf9CPkaUXemNpotdb05n4NUx6Y6GW4q90+rp3Ur42Mf5T+xpptOgaTPFnB2kKYJPPiSJPzqu12k2y/grHf3JP1qz4P6TXNQsqAcZAPbnHarZKCOnajY4I+FhJETtnufAJgfan2NOv5odXUqWYxtcEbgSAQVjEjvUnTEl9u2fSYHvIz/cVai0eVSTmRu3ZzgGQSccY+HxWUkrs2i3VGw/DbjYgBwEjzwYrS7sVkvw43pSYEs48T6mgAD29s4rRazWpbQu3AHYSSTwAO5qY7CXTE/jPqaq8Bbm9eG/yAxMHsZ8ZwfFYXU9QadxIYgY/lkg7ex5AwR3o3r3U7txnuRcUbjBMBFGNu1QfXgZMweYrM/mM7ZzkE+4mP61bj8mLZ6h+FOrpbVFRC7Fd165gQ3+UEmMQCfHHJJNWXWeu2XQo4uFTAbYPhns2ZFYnpOsuKPybZUszTAXIncRnvhe/EjntZdQ/xNhT/ANTarMBuIDOzAEsEWJIx+nIEU072PiozfUntIW2uxzgbCsZJ7kdo8/SqfUaomF8H0mIPyNS6/WXA773LPlWzPfI8fQUJbvCQGWQWE+YGInn+xTSJDOlal7e4iZIhc5UmJYDsxAKgxiSe1XFjVk2vy7pQSQwO0l1G0ADHeI5ntkVRaGyWYqjAEttUkwCTON3YnjNGahNh2gguolpkkt3VQMBfrPcxxQ5K6ChxtFoJuKIEAMwBAHAilQt3XZ/9q39mz7/FSp19Ae2HTwJmhru8HGRRe+ag1zlUlULnsB8p57f8U0waKzU9UCFQ7xumCeMeT25FEWtUPPv968+69rXb0XVcevcrOoUgbspI7bTM+cd8XHSOqhVBuI3qiLu0wQxgK2BG30rIkQAO2W2hKzXW8kwaldD3NBF6SaiDzUtFJllZtjvVL1Hp1v1u4BVVaByFMALA+k+5I8VZm8Npg/Kgrl/ajNyQCQPJ7D7xTSBsyuh6IW073p2urlh/2ooH6mT9K2FjdsUv8UZ813S2FCbDkZEHvPM0a6qc9zSqmO7RHavxQ3UdXNu4Z4R//E0F1XqluxAcsJ4O0kffiayv4j/Ecp+Qh2t/nOAGRh6QkmfUCjewPJ7vVivRV2ru4usAbSBOc88/au3BgR/Ev/mv2od7wQlVEswBbBYz7CuHV7pXEFNwiR6tpMGfEDHvUZq6Gmi40FzY4LEAbSOV/wDtg/I0P1fqSudiFxcDETJE5IiSSIJMeBApyaRLpC7SZBiCcGMf0qg6mv5bFCrAAmGPJ/mE8ef7mk9sp2ol9+H/AMRPbvGfUilnIzAdx25j1se/E/XZdU/Eb3FRNMkl2jewB2yOQMiOfUZGDXlmjuFn2LBJlidxgyPYwMdyTEmtgnXLi77emcPsQk3IWBsRiwQEepcLBxJDYPNOKSbRO6B+v9HvKjPqL7SWO0bmfdB4Cj2zArKai4q+lAyjaNwaCS3dsfCD4zxz2Gt6uHV5e6d6Agv+YBAhA4QNLQX3iSYIEZAFYnW6ou5YmSe8R2AH6Af2arroXDQdK10hNzlQHjcCVYI3qfKZbKj05+IcQKk6hq3Dwju1oekl22hicNEmVxMHBz9KzmmvJtYMYY4EyVj3AUmeII8GrBLyoYPqGxRBdox3Vtu4LM4Eds+JknWg+xmmsW1yz5XiAGkziIkEn9P0qPVMZkiMzkyceRUv/SYgD/p+d5LCYyc5A+5NM1+ldIb4kJID/wCUkCSOMMJEg/XIMRtvZLWiJSApj+Ke/bcT/ftU90rA9XInk5nnPfMj6e9O0QQW3dgW4EbtoG4gA/zNk44A/QfWpAUiIzx/seRTTtjS1shN8njj++felQ5Y0q10B7TqeuKgQFWZ3XdAHHAyBnJmBHY0T1G7cNqLMb3gAnAUHJY/Tj3NZzovUUR7hun14yAWG0MUCAIWgCFM4B3g960Ol6hbedrgwJI4IHMkHiknF+x00YHrehJupYLF2Lrvczl2Kgqg42gMM8zPirboFu4GKI5D2nZbiGdtxN0K6jhXAgY9vNGdY1WnR0dVDsh/MLBxCjebhk/xEzHzA7ihU/FKLed9gIK7SUHqkYlZIJHmY4HEVLlFcFa9l31K61pSxSQPcA8dh3/3FVXSOp796Ru2lQrTzvJCAjknifAVjUfV+oXbdpWZmVXJBV/jxO4D+FeBzmScSKz+j/NtMz29p3KNpJCkbvSrBWxu9e3/AOWD3pOdPY8W+Gr13UzZuhHQhIkvzjzjgA/Ws7q/xU7EbUUKCGiC0lWDLuOMSvaKqE1bndGCQVeXMtMBgZ+nOR9Kr3lH9hPJIAEfeeaak2RTNXo/xe63PUQQSCy4gYwFYcdj/wA1rF/Eum3QHJPqn0tjb5x3OBE15CdSwPvEZM4we/fvP6Cj9MoACswacbZ857jn7gzUyk4qwi6Nx1v8So77LVy1sj1M9t3DTyMCAoA+pPaJrI9U0oLo+5M4UI5ZVQERG7IWWMCPHzpX9OCI9CkEAFgYMgxjI7jB4MnND9U6cLewySxVdxncNziY+YAbv2I7VMfIprXTRK+k1ywAZDZJyd0bSOAAAZB+fzp+mhFBkl33zMCBjtGTEnv+lA6e4UWYkT6lIwef78+9F3AH/L2kkFwoJwfglgwjjcp/Sskm3RslFbIGZ9uLiqRgguwYqBHeRHYULe1a7ZUuOZBMhmbJn2wO2ceKn1lprRBWCJIhhIh1MGPo32FA/wCHa44RFwMAD7bj/Mf9vFbxVGTTH9NY7tygTj0mACAZKyfIBEfvVkrWS53vcDSIGGBJOZg+OI5j5UUnR3f0WyQ1uwXg43FWggduXEfKqS5qiQIJnbmMZHcGnabFJYrZdazT6W2oO97m542BTCrA+NiRucTO0YEwT3bOrYJdto+EzmBj5cCpEukTGRORkCSIMwZJ/vxRRQfFuAJycypB7g/UfLkeKMnEztsrH0zK5RgQwMEU9xxmCFA70VfbZhu6Ar8hgZ/hgYoXaIJ7yP7/AGpqTYNhT2lVBtaXGWkgRxEA5Pj+4E+kFzYUKFkYQUX4hBneB2Ybj6vePNVqOAd3jgcyTx/rT1vOGnc0tgwckH9O9DVjQVo1CsAxnawBMwIDdj2wP1qTWbQ28kNMnaBjjE8efFDJfKkg8yJJ5JAjP3/am6liCVjI5PyFQ7ci6pCfqLTjA8AgD7Uqdpum3HEi2xE8gYrtVcfoVs1li6gM3LZaWB3SV+hj3E13VLbCu1n8xH2hNsh1cOQIDGCDEiCMwfnVEmvfgkZ5bAJ5zgz9aLvakyoVoZjgg/ymZnwYNc0X5IupbsI5PTBbmq2tDESMEACOTgFcEefM1PollS7IWMjZcJKDkltoWA7/ADOI4qu1enZIxIjtAk+THMeaM03ULdtXTZt3+kwxMwcEg4MGY4PvWs7UbirHGNSd6LDU3VlWDGOBJIicAjk+454PiobWgd135Hq2rt+DeoLKH8THM/cmgHulnIMbQBtwB3GB4POfnV9pOpFCtqyVDu6KZyrEmFHdcTkx2HtWLckkkrNYxTbbKFULJvjmfXkAHBAcDGc9p+dV9xmLBX/ygL5gc9pkQe3atFrr7hm32ragN+UzW4RCVI3yoEOYIjiMHms4+9jvEiTzwJ+f0rpimnsylQVdt20XcDLDAnOcg4j65zgUOmsYMCGg49UCZ7/MVG6c5Bye8REHkxNG6fToBG9t+ZKAOBgQo7Nk/Fu4jE8mKrezKgj/ABTycA+OY5+3v4+1dTVlvTCiIIwMkAiYj3P3PmuWmd/SAWAxgHE9vfjtQV4MrliDgAyytBhfhJ7ePpWSgv5Ol3glZcppN7JABn4tvq5HIAjgj55FWTraTZKrCHBkzJxkfDJj7HvNAm6di7TEqDz5E5+VCvcJEGOQJ5wxjBnIrCcJt1ehSbqkXh0SOysASP8AuU/CSRJBjuf0qO/+XaZgEB3LOJ3c5kd+R+gyKB0WqeUUKG9SL2HxHaAzATBkRzzU/wCJtRCqjoVcwQAUZyAT25E5+5+QnxryqVPaHGTUW2VrdXdd0Rue2bZbjcjssk+8Aif0xQYZW3u0S87MAj1GWYA4jJA7DwexGo1TogQE7BLgOgmRBBmM5PtzUdp94Yt6ggB2gEHdB9QMeng47jvIrpTaVmLlf2CJ025HAgZLKQ/AOCAZ7cUTfKqg3o6j+IDnLckYBMcHxMio21blpU7ELHZAgYyoAGPAj3osAtu9Y2lgCs71OQNyDECAIByJPmm29ZcIYBd0n5regrgEtnaqjtE+fA4NBOYlT5+8VZ3kRLYjLL8JVgGDYEsAIKyMiZz8qqkEsoJgYkgSQO5icnJrSDv9gR1FJIA5/vv/AFqwXprgKdoIOd4khVIBJYRI55jsabc1QVRbAwRLZiTEAwPYzJ5+4JJ16BSuzOCN28kQIiAwAgE+3NTKUnxDTY9Ok7GBHr7EFlAXJBJJjEDjkZwe0zhBg2xJLIpLMSxn1Sy5JBMzAOeABltjqO9yDChoYRC+vDTwPp9Ioe7dLOylwGaCWZvTmPTMGWAIEg8ADjFZLJvYm2GrrWtgK1tjAxtG6B4Y7sGZx8qVVqW2Ajevtjdj5/0pUYL4Cx1jTkXFVoYSAD259/7zV0dEqkOUMySDPHbMEiqZeqfBvyEygUKmOxyp9sDGKIbqgfO6MjJMD3kCM8+aqcfI2qOuLUVosr9hX5wQJGZ/8aqtZpbZKn81VAaTIJJMkn9x9qIW24AZ/wA0IW27tpKjPLETByOTUtxFkN+eksfSGchVC4iGxOP1FSsovv8Agppy6qBbGnVysXVwZ9Mt5M8AAzHejbHTkBRhucKwaON0E4wJipLjQNzDesZe2u9Vj4ZKMwAPOdtEjpTshZII9irEfMKxMVM2+p1/Bf474AvY+NQjOjFiUJACkmQw49S8T8/NRrowlsxuM9pBj4gYgEKcz9sg127pXGN47yZkzniJNDnozOJUOwBgED38xmqttbf+iH4/hBHS7v5BZyituDJ8O8QcNInvHcGpr/UlU7rWnS2wkjb6OVySCfG6B7x4gNOgMpzvz4Un/WpbWnVQ6QPSVncqFjvMD4+09v8AWqTvjszcJLqCOkvCesMO4hyDLASxkECiWvqsgFvSAfiXg4BGJIxGB2oTSdOV7hQBQQGIO2yw9JyQUU7T3854p79OZAHYAnemPTIEBvUQoPPb9e9Q/DFydvposlEhu6tDk23x3VcE5xBER8oqqv6pjygU/wCkEYjH3NPvXYwTMc8kTAnMZ+dQO4f0gFmxAAOSTg/auiMIxjRi230sOmLdb1IynaZyQQvBmDPBgjHaRmKC6qLiMWbIIHq9QkAkTDe4PNWWj1mxmUCGYDDA4EKJE8GQeZGfaqPqJyZLMSZLMOfdCMFfpUxrKqCeKilux1ncwJwAJhSRmeZBzHkmnLYlhCwJLSCPVkcRO368Cq4vz27fSpLd8gbRETORPaK0cX6MKCW07g7QQc4E8beJMRxnxzXNVeYH1RxwCDiSRx2nPtPao31BKgmdxG3dPIHY/LximWdPvYqpzkycDGZPJor3IaQfpSGXbxIJY4YifA5Mx+xxXbVhA2wZLYLEfCDBUAN7CZpunvLaJAKOSBnawg+k4yIiPHf3gB3rrGJYsfr+n/A+VRi23XBM7cQbiAQRMeng/XtXFjyYmM/Xx/fNNtOZHf2HPHtzTjc+3jt/tifFVtDVlpoNHEsSwiYPpaAGEbSCcnAz9x3i6lqIYAMSwEMTgwMAcmRHMGPvQh17g4xAwAOKku68urKT8RUxtUDGAMQBzyBPPkzCi8rY3Q1OqOogNA8Uqkt37SiIuH3BgH3icfKlTpfAsfojtawSUW1aIkwGRWMEnl/jOPftQ9y4s7kGwjMIWInzLMSPvVrptWChW6jEoDtlSZB7SRKsPIP7UH+SoJEO5ZZDAbNrZw4YQVPfPyrVd4bPa6LpfVrlu4HDtBPqBYgMOPV2NLq+rV7pKoEAgbYAzHqJjHM59hUNmws+vepkQAu4ciTPGM4pEA7iUJknIncMnMHEZGM/1oxjlYZyqm9Aqv48QfcUVoLyJJLXFP8A+shT8yxPzxHaoRbJMKreeDxTHtMDlW+xqmrREZNOy4bqzR6blw/zFgz9/iDAz9CKT9U1JyNQzLxu3BQPmD8J9vtNU2fB+1ICex+1ThH4NPyy+S9s9ZdG3PeLtHChSJI/zOVz8hNTdM6qr3Wa5BdyuWIVW2wAvhWgCCcYzzNZ38tona0Dkwe3mn6dFbl4PgKWP6VL8cWhrzStf9NV1Dq1u06XbaupEhkJRZB59Sg++IPPIwKOTq9u+jbrmxSCdi2yzA/zQcr7gDEVn3uWyQrMpZTmUBBPGQ7R7QP1pamzaZg6AgwSwVjAjO8RJECZziOKzfjTVbNc3beq+AlekM4Y27lpgDglyNwxyCMdsGP61Cbl5CyFASBtBRhIJggA+/B7mm3bCgbrlh2Uid6HdHM7xJwef8tEpfssVCG6VKyCBwRIgAgM2Own600n72TUbtaf7lQ+tAUDb6jlmOST5B70HdvFjLEknvR9y3+YzbI2qY3OVSJwZDGYnPt+lK30fILuqqRgr6yT29MqY5z2jNafpRjKLkyuUicZ+lcYeasNX0YoCy3LTKI/zhSQeDDxEwcSeDzFBXNJcQSyniexxMTg8TieDVJp7RLi10a3aAf3mupKmceIntzz2pu09iPvBom/0y4h9W0gxDK6Op3cQykin9CpjC0k5zOaL0eiLnkBf4seDEZzkfpQ50lxCJhCxgSRnt7iOx+fvRd6xqU9LLMzEetZI7bZg47xWbXwy4x+ULV7FKgoAs5fJIEw0eoie4/c9otQ6KzBcrJHMfKN2fFR3DcUbocREym1QTMcgAnxiefFB3b0ncQB8sA+/wA6aQ2w27t2KAcgEwCrCZxkNzH/ABSTRnadwYGJBjEGMk9gR380Jpt24FRJ7R/SO9HPc+LdbUMB6RGxhuwfSDkYkY8+aGq0hae2iG9ZYGCjAwMFTPHyrtNTSXCARbciMEBoj2xxXKB7+zaLpRjH6T/WpDpR4qVcnbxz8MDjPG3+tTXbLAE7vt/tArVNHDjIB/wwnCj9f9K5/hAfH3FRPccMPhyJEY++KJsB2gDZ9V/WcmpyT9F4yXsibRLjjnOeR7fw9855qQaVduBDTyTiPEBcH3nzjxLdskH1EfRcj5SY+4NPVDgLEmIkx94H9KTopKXyDPpfcf0mo30gzluBthVknnMt6R7iflUz6lpgxz2nuJ81Ff1EDAHjgDzn96G1QLKyNtIpJgthSQSqBi234RDGFJkSTwZjsY10R9Pqb+YEDB/lg+v6xU+n1DHAOffjt3+vipjbeR8JmeScQOwioaKuQK2icnJP3P0zTn0rHO7Oc9+IPzNWT6a4I+D7k4H/AMaBuXTJ9u3aaGkkNSk/YKthra7FPpJmMx9iIoW3ZVQV2IVPIg5/vn6UcLbbu0/Mx+lCXbhkgx+v7k1LYZSXsHv6BWILHIJIycSZgew7eKcdJmR45PJMyrEzyMD3gVMjGJpXLpkAd6jN8FnJAg0BwME7gZInkktAGBODB7gGrPpVgIZKBjxALAA/fOBx7CowQglpImIBjJ9/FE2XWfhgYxuJ5E9omryvo15ZIC6t0z824XllEYQKDBzycYn2mqtuiXNsSv6ifng4rRNqFUcd/A/1ofUazvn7A/vxVKVIl+Rt2yhfpl6NpKkf9xJ+QJEx7UXfs3GtKjMQ6REbuBIye5gxxVgNQM/FPM/SfP6UmvjPOPIH7AillY15JIqbdi4imHfcRG0yymSJkH2kgjMwPJqVNXqFRk3STEEkmBGQARHirDexyDx7sP0k0w61v7n/AFod+xryyXAXp2r1Kt6gXU4MgGJ7iIqbXI90DerSMqNsEZzDEmPBx9O9TtqCIyfcQAKcNQxHOPkCZqHldrQ/zyqvRQPodQDCB9vb1f8AH7UqvRec5BH9/SlTykT+WR//2Q=="
        }
        itemThreeTitle={insightsThree[2]?.district}
        itemThreePercentage={insightsThree[2]?.donorEnagement+"%"}
      />
      <InsightItem
        title={"Best country to focus for donations"}
        itemOneImge={
          "https://www.holidify.com/images/bgImages/COLOMBO.jpg"
        }
        itemOneTitle={insightsFour[0]?.country}
        itemOnePercentage={insightsFour[0]?.donorEnagement+"%"}
        itemTwoImge={
          "https://static.javatpoint.com/list/images/list-of-cities-in-australia2.jpg"
        }
        itemTwoTitle={insightsFour[1]?.country}
        itemTwoPercentage={insightsFour[1]?.donorEnagement+"%"}
        itemThreeImge={
          "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/3d/9f/2d.jpg"
        }
        itemThreeTitle={insightsFour[2]?.country}
        itemThreePercentage={insightsFour[2]?.donorEnagement+"%"}
      />
    </div>
  );
};

export default Insights;
