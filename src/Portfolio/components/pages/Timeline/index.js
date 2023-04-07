import React from "react";
import CalendarEvent from "./CalendarEvent";
import { timelineContent } from "./constants";
import { TimelineContainer, TimelineItems, TimelineRow,TimelineTitle } from "./styles";
import TimelineToggler from "./TimelineToggler";
import { generateInteractiveTimeline } from "./utils";
import SidePiece from "./SidePiece";
import { isMobile } from "../../../utils/common";


function Timeline() {
  let [enabledTypes, setEnabledTypes] = React.useState(["work", "education"]);
  const timelineScroll = React.useRef();

  const [scrollTop, setScrollTop] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      let trigger = timelineScroll.current.offsetTop-window.innerHeight/(isMobile() ? 3 : 2);
      if (window.scrollY < trigger) {
        setScrollTop(0);
      }
      else {
        setScrollTop(window.scrollY - trigger);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [timelineScroll]);

  console.log(scrollTop)

  let filteredContent = timelineContent.filter(event => {
    if (!event.type) {
      return true;
    }
    let commonTypes = event.type.filter(type => {
      return enabledTypes.includes(type)
    })
    return commonTypes.length !== 0
  })
  return <TimelineContainer id="timeline" ref={timelineScroll}>
     <TimelineTitle>Timeline</TimelineTitle>
    <TimelineToggler types={enabledTypes} setTypes={setEnabledTypes} />
    <br/><br/><br/>
    {
      enabledTypes.length === 0 && <>Select event type</>
    }
    <TimelineItems>
      {
        generateInteractiveTimeline(filteredContent).map((row, index) => {

          return <TimelineRow align={index % 2 === 0 ? "left" : "right"}>
            {
              row.map(element => {
                let percent = element.getPercent(scrollTop)
                if (element.type === 'side') {
                  return <SidePiece {...element} percent={percent} forward={index % 2 === 0} />
                }
                else {
                  return <CalendarEvent {...element} percent={percent} forward={index % 2 === 0} />
                }
              })
            }
          </TimelineRow>



        })
      }
    </TimelineItems>

  </TimelineContainer>;
}
export default Timeline;