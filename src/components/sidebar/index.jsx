/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import styled from "styled-components";
import {
  BsPatchExclamation,
  BsTag,
  BsReceipt,
  BsShop,
  BsCalendarCheck,
  BsStickies,
  BsCheck2,
  BsCardList,
  BsChatSquareText,
  BsList
} from "react-icons/bs";
import { IoSettingsOutline, IoChevronBackOutline } from "react-icons/io5";
import ReebokLogo from "../../assets/images/reebok-logo.png";
import Image from "next/image";

const IconContainer = ({ children, isActive }) => {
  return <IconWrap isActive={isActive}>{children}</IconWrap>;
};

const TextContainer = ({ children }) => {
  return <Text>{children}</Text>;
};

const NotificationContainer = ({ color, notifiNumber }) => {
  return <NotificationBox color={color}>{notifiNumber}</NotificationBox>;
};

const SingleTab = ({ item, isActive, isShrink, handleClick }) => {
  return (
    <TabWrapper isActive={isActive} onClick={handleClick}>
      <IconContainer isActive={isActive}>{item.icon()}</IconContainer>
      <TabTextWrapper isShrink={isShrink}>
        <TextContainer>{item.name}</TextContainer>
        {item.isNotifiTab && (
          <NotificationContainer
            notifiNumber={item.notifiNumber}
            color={item.notifiColor}
          />
        )}
      </TabTextWrapper>
    </TabWrapper>
  );
};

const SingleCollapsable = ({ item, isActive, isShrink, handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickFunction = () => {
    setIsOpen(!isOpen);
    handleClick();
  };

  return (
    <div>
      <TabWrapper isActive={isActive} onClick={handleClickFunction}>
        <IconContainer isActive={isActive}>{item.icon()}</IconContainer>
        <TabTextWrapper isShrink={isShrink}>
          <TextContainer>{item.name}</TextContainer>
          <RoundIconWrapper isOpen={isOpen}>
            <IoChevronBackOutline />
          </RoundIconWrapper>
        </TabTextWrapper>
      </TabWrapper>
      <SubContentWrapper isOpen={isOpen}>
        {item.subItems.map((o, idx) => (
          <SubWrapper>
            <DotWrapper isLast={idx === item.subItems.length - 1}>
              <DotIcon />
            </DotWrapper>
            <SubTextWrapper isShrink={isShrink}>
              <TextContainer>{o.subName}</TextContainer>
              {o.notifiNumber === 0 ? (
                <BsCheck2 color={"#6EE1A1"} />
              ) : (
                <span>{o.notifiNumber}</span>
              )}
            </SubTextWrapper>
          </SubWrapper>
        ))}
      </SubContentWrapper>
    </div>
  );
};

function App() {
  const [isShrinkView, setIsShrinkView] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const TabList1 = [
    {
      id: 1,
      name: "Database",
      isNotifiTab: false,
      icon: BsShop,
    },
    {
      id: 2,
      name: "Report",
      isNotifiTab: false,
      icon: BsCalendarCheck,
      subItems: [
        {
          id: 11,
          subName: "Auth Mismatch",
        },
        {
          id: 22,
          subName: "Order Demand",
        },
        {
          id: 33,
          subName: "Omni Demand",
        },
        {
          id: 44,
          subName: "Order Report",
        },
        {
          id: 55,
          subName: "Cert Usage",
        },
      ],
    },
    {
      id: 3,
      name: "On Demand",
      isNotifiTab: false,
      icon: BsReceipt,
      subItems: [
        {
          id: 11,
          subName: "Order",
        },
        {
          id: 22,
          subName: "Report",
        },
        {
          id: 55,
          subName: "Data",
        },
      ],
    },
    {
      id: 4,
      name: "AWS",
      icon: BsStickies,
      notifiColor: "#3D6ADA",
      subItems: [
        {
          id: 11,
          subName: "Recent",
        },
        {
          id: 22,
          subName: "Sent",
        },
        {
          id: 55,
          subName: "Deleted",
        },
      ],
    },
    {
      id: 5,
      name: "Purge",
      icon: BsTag,
      notifiColor: "#F164C1",
    },
    {
      id: 6,
      name: "Batch Jobs",
      isNotifiTab: true,
      icon: BsCardList,
    },
    {
      id: 7,
      name: "API Health Check",
      isNotifiTab: false,
      icon: BsChatSquareText,
    },
    {
      id: 8,
      name: "Bopis",
      isNotifiTab: false,
      icon: BsChatSquareText,
    },
  ];

  const TabList2 = [
    {
      id: 8,
      name: "Help",
      isNotifiTab: false,
      icon: BsPatchExclamation,
    },
    {
      id: 9,
      name: "Setting",
      isNotifiTab: false,
      icon: IoSettingsOutline,
    },
  ];

  const handleSidebarView = () => {
    setIsShrinkView(!isShrinkView);
  };

  const handleActive = (id) => {
    setActiveTab(id);
  };

  return (
    <AppContainer>
      <SideBarContainer isShrink={isShrinkView}>
        <SideBarButton onClick={handleSidebarView} isShrink={isShrinkView}>
          <BsList />
        </SideBarButton>
        <LogoWrapper>
          <Logo>
            <Image src={ReebokLogo} alt="logo" className="rbk-logo" />
          </Logo>
          <LogoText isShrink={isShrinkView}>
            <span>REEBOK</span>
          </LogoText>
        </LogoWrapper>
        <SideTabWrapper>
          <TopWrapper>
            {TabList1.map((o) =>
              o.subItems ? (
                <SingleCollapsable
                  item={o}
                  isShrink={isShrinkView}
                  isActive={activeTab === o.id}
                  handleClick={() => handleActive(o.id)}
                />
              ) : (
                <SingleTab
                  item={o}
                  isShrink={isShrinkView}
                  isActive={activeTab === o.id}
                  handleClick={() => handleActive(o.id)}
                />
              )
            )}
          </TopWrapper>
        </SideTabWrapper>
      </SideBarContainer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  // width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  // background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const SideBarContainer = styled.div`
  position: relative;
  height: 100vh;
  background-color: #3F3E3E;
  box-sizing: border-box;
  padding: 15px;
  font-family: "DM Sans", sans-serif;
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease;
  width: ${({ isShrink }) => (isShrink ? "75px" : "250px")};
  // border-radius: ${({ isShrink }) => (isShrink ? "4px" : "8px")};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const SideBarButton = styled.button`
  cursor: pointer;
  background-color: #fff;
  border-radius: 20%;
  width: 30px;
  aspect-ratio: 1;
  display: grid;
  place-content: center;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: absolute;
  top: 4vh;
  right: 17px;
  transition: all 0.3s ease;

  transform: ${({ isShrink }) =>
    isShrink ? "rotate(180deg)" : "rotate(0deg)"};

  svg {
    width: 24px;
    height: 24px;
  }

  :hover {
    box-shadow: rgba(99, 99, 99, 0.5) 0px 2px 8px 0px;
    transition: all 0.3s ease;
  }
`;
const LogoWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;
  margin-bottom: 30px;
  column-gap: 0.75rem;
  overflow: hidden;
  padding: 0 2px;
`;
const Logo = styled.div`
  // background-color: #000;
  // border-radius: 12px;
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  padding: 5px;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.div`
  font-size: 20px;
  opacity: ${({ isShrink }) => (isShrink ? "0" : "1")};

  transition: all 0.3s ease;
  color: #fff;
  span {
    font-weight: 600;
    margin-right: 10px;
  }
`;

const SideTabWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TopWrapper = styled.div`
  flex: 1 1 auto;
`;

const BottomWrapper = styled.div`
  flex: 0 1 auto;
`;

const TabWrapper = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: max-content auto;

  column-gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 8px;
  height: 20px;
  overflow: hidden;
  margin: 5px 0;

  background-color: ${({ isActive }) => (isActive ? "#EFEFEF" : "transparent")};
  color: ${({ isActive }) => (isActive ? "#000" : "#fff")};
  transition: all 0.3s ease;

  // :hover {
  //   transition: all 0.3s ease;
  //   background-color: #0f313e;
  //   color: #fff;
  // }
`;

const IconWrap = styled.div`
  font-size: 1.25rem;
  aspect-ratio: 1;
  padding: 0;

  svg {
    transition: all 0.3s ease;
    color: ${({ isActive }) => (isActive ? "#000" : "#fff")};
  }
`;

const TabTextWrapper = styled.div`
  width: 100%;
  display: flex;
  opacity: ${({ isShrink }) => (isShrink ? "0" : "1")};
  justify-content: space-between;
  transition: all 0.3s ease;
  white-space: nowrap;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const NotificationBox = styled.div`
  width: 20px;
  height: 20px;
  aspect-ratio: 1;
  font-size: 12px;
  border-radius: 6px;
  display: grid;
  place-items: center;
  font-weight: 600;
  background-color: ${({ color }) => color};
  color: #fff;
`;

// for Second Part
const RoundIconWrapper = styled.button`
  cursor: pointer;
  background-color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: grid;
  place-content: center;
  border: none;
  transition: all 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? "rotate(-90deg)" : "rotate(90deg)")};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;
const SubContentWrapper = styled.div`
  height: auto;
  max-height: ${({ isOpen }) => (isOpen ? "120px" : "0px")};
  transition: all 0.3s ease;
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  scrollbar-width: thin;
  scrollbar-color: #000;

  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-thumb {
    background-color: #000;
  }
`;
const SubWrapper = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;

  column-gap: 0.75rem;
  padding: 0 0.85rem;
  height: 30px;
`;
const DotWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 5px;

  :after {
    content: "";
    height: 100%;
    background-color: #e7e7ea;
    width: 2px;

    position: absolute;
    top: 50%;
    left: 2px;
    display: ${({ isLast }) => (isLast ? "none" : "block")};
  }
`;
const DotIcon = styled.span`
  width: 6px;
  height: 6px;
  background-color: #e7e7ea;
  border-radius: 50%;
  position: relative;
`;
const SubTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #8b8d91;
  font-weight: 500;
  opacity: ${({ isShrink }) => (isShrink ? "0" : "1")};
  transition: all 0.3s ease;
  white-space: nowrap;

  :hover {
    color: #000;
  }

  span {
    font-size: 14px;
    width: 15px;
  }
`;
