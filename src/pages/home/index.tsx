import { Navigation } from "components";
import subImage from "../../assets/images/subImage.png";
import left from "../../assets/images/left_white.png";
import right from "../../assets/images/right_white.png";
import footerLogo from "../../assets/images/caffein_noWhite.png";
import campImage from "../../assets/images/campImage.png";

const Home = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* to-do: Header 컴포넌트로 빼는 작업 해야됨  */}
      <section
        style={{
          width: "inherit",
          height: "560px",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(97.88deg, #854BFF -84.42%, #7179FF 15.02%, #6D83FF 36.89%, #698BFF 54.79%, #6499FF 80.65%, #659BF7 108.49%, #669FEA 148.27%, #69A9CD 197.99%, #6CB1B2 239.75%)",
        }}
      >
        <Navigation />
        <article
          style={{
            padding: "56px 247px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "column",
            }}
          >
            <span
              style={{ fontSize: "48px", color: "#fff", paddingBottom: "45px" }}
            >
              개발은 <br /> 카페인과 함께
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p style={{ flex: "6", border: "1px solid #fff" }} />
              <div style={{ flex: "1", textAlign: "center" }}>
                <img src={left} alt="left" />
              </div>
              <div style={{ flex: "1", textAlign: "center" }}>
                <img src={right} alt="right" />
              </div>
            </div>
          </div>
          <div
            style={{ display: "flex", justifyContent: "flex-end", flex: "2" }}
          >
            <img src={subImage} alt="서브 배경 이미지" />
          </div>
        </article>
      </section>
      {/* to-do: contents 컴포넌트로 빼는 작업 해야됨  */}
      <section
        style={{
          padding: "64px 240px 0px",
          maxWidth: "960px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <article
          style={{
            width: "960px",
            height: "323px",
            display: "flex",
            flexDirection: "column",
            marginBottom: "48px",
          }}
        >
          <div style={{ marginBottom: "9px", flex: "1" }}>
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>
              인기 부트 캠프
            </span>
          </div>
          <div
            style={{
              flex: "6",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <div
              style={{
                border: "1px solid #CCCCCC",
                borderRadius: "10px",
                background: `url(${campImage}) no-repeat`,
                display: "flex",
                flex: "1",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "9.5px 16px",
                }}
              >
                <span style={{ paddingBlock: "6.5px" }}>모집중</span>
                <span style={{ paddingBlock: "6.5px" }}>
                  직접 해보는 <br /> 페이스북 마케팅 실무
                </span>
                <span style={{ paddingBlock: "6.5px" }}>2월 28일 까지</span>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #CCCCCC",
                borderRadius: "10px",
                background: `url(${campImage}) no-repeat`,
                display: "flex",
                flex: "1",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "9.5px 16px",
                }}
              >
                <span style={{ paddingBlock: "6.5px" }}>모집중</span>
                <span style={{ paddingBlock: "6.5px" }}>
                  직접 해보는 <br /> 페이스북 마케팅 실무
                </span>
                <span style={{ paddingBlock: "6.5px" }}>2월 28일 까지</span>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #CCCCCC",
                borderRadius: "10px",
                background: `url(${campImage}) no-repeat`,
                display: "flex",
                flex: "1",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "9.5px 16px",
                }}
              >
                <span style={{ paddingBlock: "6.5px" }}>모집중</span>
                <span style={{ paddingBlock: "6.5px" }}>
                  직접 해보는 <br /> 페이스북 마케팅 실무
                </span>
                <span style={{ paddingBlock: "6.5px" }}>2월 28일 까지</span>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #CCCCCC",
                borderRadius: "10px",
                background: `url(${campImage}) no-repeat`,
                display: "flex",
                flex: "1",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "9.5px 16px",
                }}
              >
                <span style={{ paddingBlock: "6.5px" }}>모집중</span>
                <span style={{ paddingBlock: "6.5px" }}>
                  직접 해보는 <br /> 페이스북 마케팅 실무
                </span>
                <span style={{ paddingBlock: "6.5px" }}>2월 28일 까지</span>
              </div>
            </div>
          </div>
        </article>
        <article
          style={{
            width: "960px",
            height: "323px",
            display: "flex",
            flexDirection: "column",
            marginBottom: "48px",
          }}
        >
          <div style={{ marginBottom: "9px", flex: "1" }}>
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>
              특가 할인 캠프
            </span>
          </div>
          <div
            style={{
              flex: "6",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <div
              style={{
                border: "1px solid #CCCCCC",
                borderRadius: "10px",
                background: `url(${campImage}) no-repeat`,
                display: "flex",
                flex: "1",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "9.5px 16px",
                }}
              >
                <span style={{ paddingBlock: "6.5px" }}>모집중</span>
                <span style={{ paddingBlock: "6.5px" }}>
                  직접 해보는 <br /> 페이스북 마케팅 실무
                </span>
                <span style={{ paddingBlock: "6.5px" }}>2월 28일 까지</span>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #CCCCCC",
                borderRadius: "10px",
                background: `url(${campImage}) no-repeat`,
                display: "flex",
                flex: "1",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "9.5px 16px",
                }}
              >
                <span style={{ paddingBlock: "6.5px" }}>모집중</span>
                <span style={{ paddingBlock: "6.5px" }}>
                  직접 해보는 <br /> 페이스북 마케팅 실무
                </span>
                <span style={{ paddingBlock: "6.5px" }}>2월 28일 까지</span>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #CCCCCC",
                borderRadius: "10px",
                background: `url(${campImage}) no-repeat`,
                display: "flex",
                flex: "1",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "9.5px 16px",
                }}
              >
                <span style={{ paddingBlock: "6.5px" }}>모집중</span>
                <span style={{ paddingBlock: "6.5px" }}>
                  직접 해보는 <br /> 페이스북 마케팅 실무
                </span>
                <span style={{ paddingBlock: "6.5px" }}>2월 28일 까지</span>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #CCCCCC",
                borderRadius: "10px",
                background: `url(${campImage}) no-repeat`,
                display: "flex",
                flex: "1",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "9.5px 16px",
                }}
              >
                <span style={{ paddingBlock: "6.5px" }}>모집중</span>
                <span style={{ paddingBlock: "6.5px" }}>
                  직접 해보는 <br /> 페이스북 마케팅 실무
                </span>
                <span style={{ paddingBlock: "6.5px" }}>2월 28일 까지</span>
              </div>
            </div>
          </div>
        </article>
        <article
          style={{
            width: "960px",
            fontSize: "24px",
            color: "#fff",
            background: "#7471FF",
            padding: "33px 394px 33px 42px",
            boxSizing: "border-box",
          }}
        >
          현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝
        </article>
        <article
          style={{
            marginBlock: "54px",
            width: "960px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span style={{ fontSize: "24px", fontWeight: "bold" }}>커뮤니티</span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                border: "1px solid #CCCCCC",
                borderRadius: "10px",
                padding: "16px",
              }}
            >
              <div>tag</div>
              <h3>합격 메일 답장 어떻게 할까요?</h3>
              <h4>고칠 부분이 있는지 봐주시면 감사하겠습니다!</h4>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#CCCCCC",
                  }}
                ></div>
                <div>
                  <h5>멘토 1234</h5>
                  <div>안녕하세요 먼저 면접까지.....</div>
                </div>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #CCCCCC",
                borderRadius: "10px",
                padding: "16px",
              }}
            >
              <div>tag</div>
              <h3>합격 메일 답장 어떻게 할까요?</h3>
              <h4>고칠 부분이 있는지 봐주시면 감사하겠습니다!</h4>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#CCCCCC",
                  }}
                ></div>
                <div>
                  <h5>멘토 1234</h5>
                  <div>안녕하세요 먼저 면접까지.....</div>
                </div>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #CCCCCC",
                borderRadius: "10px",
                padding: "16px",
              }}
            >
              <div>tag</div>
              <h3>합격 메일 답장 어떻게 할까요?</h3>
              <h4>고칠 부분이 있는지 봐주시면 감사하겠습니다!</h4>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#CCCCCC",
                  }}
                ></div>
                <div>
                  <h5>멘토 1234</h5>
                  <div>안녕하세요 먼저 면접까지.....</div>
                </div>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #CCCCCC",
                borderRadius: "10px",
                padding: "16px",
              }}
            >
              <div>tag</div>
              <h3>합격 메일 답장 어떻게 할까요?</h3>
              <h4>고칠 부분이 있는지 봐주시면 감사하겠습니다!</h4>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#CCCCCC",
                  }}
                ></div>
                <div>
                  <h5>멘토 1234</h5>
                  <div>안녕하세요 먼저 면접까지.....</div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* to-do: footer 컴포넌트로 빼는 작업 해야됨  */}
      <section
        style={{
          padding: "32px 240px",
          maxWidth: "960px",
          height: "160px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#EEEEEE",
        }}
      >
        <article style={{ flex: "1.5" }}>
          <img src={footerLogo} alt="footer logo" />
        </article>
        <article style={{ flex: "4" }}>
          <p>
            대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호
            <br />
            <br />
            Copyright by (주)카페인. All right reserved.
            <br />
            이용약관 개인정보처리방침
          </p>
        </article>
        <article
          style={{
            display: "flex",
            flex: "0.8",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "#CCCCCC",
            }}
          ></div>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "#CCCCCC",
            }}
          ></div>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "#CCCCCC",
            }}
          ></div>
        </article>
      </section>
    </div>
  );
};

export default Home;
