import { Paper } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Card } from "react-bootstrap";
import vidos from './BMW.mp4'


const MainPage = () => {
  return (
    <div style={{ background: "silver" }}>
      <div style={{ width: "100%" }}>
        <h1
          style={{
            marginTop: "40px",
            textAlign: "center",
            background: "transparent",
            boxShadow: "none",
            backgroundAttachment: "scroll",
            backgroundImage:
              "url(https://paultan.org/image/2013/12/wbmw-1.jpg)",
            height: "40rem",
            width: "100%",
            backgroundSize: "cover",
            justifyContent: "center",
            margin: "auto",
            color: "ivory",
          }}
        >
          У нас имеется огромный ассортимент автомобилей!
        </h1>
        <div
          style={{
            justifyContent: "center",
            margin: "auto",
            border: "3px solid",
            position: "direction",
            height: "650px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "white",
          }}
        >
          <h1
            style={{
              marginBottom: "70px",
              justifyContent: "center",
              display: "flex",
            }}
          >
            Работаем с 2005 года
          </h1>
          {""}
          <img
            src="https://cdn-icons-png.flaticon.com/256/1283/1283342.png"
            alt=""
            style={{ marginTop: "-10px" }}
          />
          <div style={{ marginTop: "40px" }}>
            {" "}
            <p
              style={{
                fontWeight: "bold",
                fontSize: "35px",
                display: "flex",
                justifyContent: "center",
              }}
            ></p>
          </div>
        </div>

        <Accordion
          style={{
            background: "gray",
            borderRadius: "50px",
            width: "100%",
            justifyContent: "center",
            margin: "auto",
            paddingTop: "10px",
            marginTop: "20px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              style={{ fontWeight: "bold", size: "50px", margin: "auto" }}
            >
              <img
                style={{ width: "50px" }}
                src="https://img.icons8.com/windows/344/bmw.png"
                alt="#"
              />
              Каталог автомобилей
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            ></div>
          </AccordionDetails>
          <Accordion style={{ background: "darkbrown" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography style={{ fontWeight: "bold" }}>X-серия</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Paper
                elevation={3}
                className="d-flex flex-wrap margin-auto"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  margin: "auto",
                  border: "20px",
                  padding: "60px",
                  width: "100%",
                  background: "grey",
                }}
              >
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW X1
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfjnWy10tLhu1XzWVo7puMLWFmdkAj5DOPFtpOZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giAyNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYVD9Wh1DMzti%25eeqVYDafHRAjmztYRSJdw67aftxdTQVw1RSfWQlO%25%25VxdSeZGEbuzWQdjc9NO3aeZQ6KowfXRjcZwBL%255rx6Kc%252NG84WwBKupk81Fe%252B3inXVIjup2XH5rGv63iprJ8iKGwXHi4TPHA9%25rJHFlMsOou4TJIsDRXL3FlTv0YfeyXIslGAtebCrv0s9OfjNE4GA0ogS7wNF9OALUd1XkIogOybAMBnvLUgChOD85GybUEqgNV89ChbNmUhIPoEqhk7b1DMLNmqn1hrJDyk7m5VqbIYCn178zmJttE5V1PaXslfN8zVMRr0kSkPazDxiBndnMRaYWH2qQ5DxRteJrcZ8YWxfj0wpcPteWS6AlHKMfjedwWJXBDS6jQ%25eTv2Ydw6ZujlaptQ%25wc3ZpLifZu%25KXcolHS9uAqsr%25P61U39IjAeSw27BzcQkO"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин ● Дизель
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Внешность, динамика и маневренность модели не оставляют
                      сомнений в ее амбициях, а сочетание высокой практичности и
                      универсальности с инновационными технологиями гарантирует
                      максимальный комфорт, километр за километром.
                    </Card.Text>
                    <Card.Title>Цена от 2 830 000 сом</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW X2
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfykPg10tLhu1XzWVo7puMLWFmdkAj5DOPshO%25Z8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giZnNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYXM5Wh1DMztil6eqVYDafz2xjmztYRSGBO67aftxdYrBw1RSfWQfum%25VxdSeZ4i3uzWQdjcyEh3aeZQ6KAIXXRjcZwBLnUrx6Kc%252Nqd4WwBKupUmIFe%252B3iu8IIjup2XH3ccv63iprJyCMGwXHi4TpW29%25rJHFlHY3ou4TJIsJNgL3FlTv0P6YyXIslGAzsHCrv0s9Ofo6E4GA0ogsU3NF9OALUPMLkIogOybQJ8nvLUgChCWA5GybUEqgmP89ChbNmUhIPoEqhk7bSaMLNmqn1hdGDyk7m5VqbIYCn178z5ThtE5V1Pa8lmfN8zVMRPcySkPazDx4AYdnMRaYWHt1Q5DxRteIjPZ8YWxfj0pUcPteWS6xiuKMfjedw9NxBDS6jQ%25oqh2Ydw6ZuTlHptQ%25wc3bKeifZu%25KXh5IHSc3uBru5vJdKX3242EVTQBrXpFOgilZ24riI1H0scpF4Hv4iX0KEFhzUG4fXx7IEL3huKrTRJei2Mq"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин ● Дизель
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Абсолютно уникальный. Чрезвычайно исключительный. Новый
                      BMW X2 делает свои спортивные амбиции совершенно ясными с
                      первого взгляда. Благодаря своему смелому атлетизму, он
                      обеспечивает динамичную и гибкую производительность.
                    </Card.Text>
                    <Card.Title>Цена от 2 970 000 сом</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW X3
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfvKIl10tLhu1XzWVo7puMLWFmdkAj5DOPEtEKZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74g37TNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYpi4Wh1DMztIVqeqVYDafaiojmztYRSJ3667aftxdTWgw1RSfWQlO%25%25VxdSeZsNEuzWQdjc0ka3aeZQ6KAneXRjcZwBLv5rx6Kc%252y5b4WwBKupC3PFe%252B3iELSIjup2XHN3Kv63iprJ8yYGwXHi4TPFB9%25rJHFlMIxou4TJIsDvyL3FlTv0YliyXIslGAtsbCrv0s9OfeFE4GA0ogSTqNF9OALUdlkkIogOybQ%257nvLUgChZu85GybUEqcaX89ChbNmKRIPoEqhk7BS6MLNmqn12MbDyk7m5VpKbYCn178ziBwtE5V1Pa7ZSfN8zVMR1zySkPazDxVBDdnMRaYWz2MQ5DxRteapxZ8YWxfjRi0cPteWS6xkQKMfjedwHbRBDS6jQ%25JNp2Ydw6ZuTlZptQ%25wc3lsqifZu%25KXsy8HSc3uBr0NCJdKX324AbMTQBrXpFOhslZ24riIpzsscC4bVgvrt3RmFCoub%25cXJaHWpBPh"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин ● Дизель
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      BMW X3 отличается уникальной системой управления
                      заслонками активной решетки радиатора – если потребность в
                      охлаждении невелика, одна из заслонок остается закрытой,
                      что дополнительно улучшает аэродинамику автомобиля.
                    </Card.Text>
                    <Card.Title>Цена от 4 520 000 сом</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW X4
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf6JDc10tLhu1XzWVo7puMLWFmdkAj5DOPMtEmZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giUnNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYV9aWh1DMztIVReqVYDafaiojmztYRSJwL67aftxdTC1w1RSfWQlER%25VxdSeZG4NuzWQdjc9NO3aeZQ6KownXRjcZwBL6drx6Kc%252y184WwBKupCVRFe%252B3inXZIjup2XH5rzv63iprJ849GwXHi4TPHB9%25rJHFlMJOou4TJIsDRXL3FlTv0YWUyXIslGAteECrv0s9Ofm6E4GA0ogS73NF9OALUdMRkIogOybQk0nvLUgChZSR5GybUEqgYP89ChbNmUhIPoEqhk7bXHMLNmqn1hdnDyk7m5VqQkYCn178zmZ1tE5V1Pa7oDfN8zVMRcsmSkPazDxK9QdnMRaYWB2YQ5DxRte2pAZ8YWxfjpICcPteWS6i9vKMfjedwHsNBDS6jQ%25J0p2Ydw6ZuQTPptQ%25wc3ZmeifZu%25KXcmHHSc3uBrKMQJdo3Om04uMwVbXov6Ojd%25p12aKZng"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин ● Дизель
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      BMW X4 - настоящий покоритель дорог, снащенный двигателями
                      BMW TwinPower Turbo и имеющий более широкую колесную базу
                      для превосходной управляемости, а также множество
                      усовершенствованных элементов дизайна экстерьера и
                      интерьера.
                    </Card.Text>
                    <Card.Title>Цена от 4 850 000 сом</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW X5
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfQJsd10tLhu1XzWVo7puMLWFmdkAj5DOPcQV%25Z8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74g37WNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYVs4Wh1DMztIAzeqVYDafM3ajmztYRSDXz67aftxdYrfw1RSfWQthj%25VxdSeZ4EYuzWQdjcFs73aeZQ6KIoqXRjcZwBvL4rx6Kc%252Gyn4WwBKupUIaFe%252B3ibMUIjup2XH5qMv63iprJqYSGwXHi4TnYu9%25rJHFl5Ifou4TJIs8vWL3FlTv0P6PyXIslGAtnUCrv0s9OfQ6E4GA0ogSZhNF9OALUdcnkIogOybQCunvLUgChZq15GybUEqcmO89ChbNmKwYPoEqhk7BDDMLNmqn12cjDyk7m5VnJbYCn178zBGPtE5V1Pa29yfN8zVMRpoMSkPazDxTY7dnMRaYWl2OQ5DxRtesCZZ8YWxfjtzzcPteWS6fgoKMfjedwSkYBDS6jQ%25gEk2Ydw6ZuUNCptQ%25wc3bpjifZu%25KXsnDHSc3uBr0FvJdKX324AIxTQBrXpFOnNlZ24riIg6gscpF4Hv5tX0KiIFJGbhTABHvIT9hqxO2JGvloMjegpT9GsLx0bUilo90yYw0bHsLoACR1%25hJ0yLOEozjqTACygNSd4mlOECUkeE87sYEx%25anCpLXjNYPox9syh3b4gAcW"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин ● Дизель
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Изначально, X5 всегда считался одним из лучших автомобилей
                      в своём классе начиная с кузова Е53. С новым поколением X5
                      получил другой кузов, который добавил брутальности. Для
                      клиентов предлагается большой выбор комплектаций.
                    </Card.Text>
                    <Card.Title>Цена от 6 040 000 сом</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW X6
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf6GDP10tLhu1XzWVo7puMLWFmdkAj5DOPcjV%25Z8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giA8NF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYVs5Wh1DMztIA1eqVYDaf4YQjmztYRSDXR67aftxdYraw1RSfWQt4S%25VxdSeZfq6uzWQdjcFNt3aeZQ6KI01XRjcZwBvLmrx6Kc%252GyF4WwBKup9C5Fe%252B3ibvRIjup2XHhDbv63iprJ8mDGwXHi4Tmtd9%25rJHFl5t3ou4TJIs8vSL3FlTv0PGeyXIslGAMwMCrv0s9ODGTE4GA0ogS8hNF9OALUdcnkIogOybQCunvLUgChZqA5GybUEqc6D89ChbNmKMVPoEqhk7BDDMLNmqn12cjDyk7m5VnJbYCn178zB9MtE5V1Pa29yfN8zVMRpokSkPazDxTY7dnMRaYWl%25TQ5DxRtesCZZ8YWxfjtzzcPteWS6fgoKMfjedwOCNBDS6jQ%25gEy2Ydw6ZuUIPptQ%25wc3llFifZu%25KXsnDHSc3uBr0FvJdKX324AIGTQBrXpFOvWlZ24riIg5kscpF4HvUwU0KiIFJG8frABHvIT9hqlO2JGvloqmWgpT9GsLD6jUilo90yYw0bHsLoACR1%25hJ0yLOEjgmqTACygNLa6mlOECUkait7sgNEbnbiy10UkNh56H4VAfke3x8NHC4wnfDyeLAEmrqIbgBj"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин ● Дизель
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      BMW X6 отличается уникальным внешним видом и спортивной
                      динамичностью благодаря мощному двигателю, точно
                      настроенной подвеске и широкой комплектации, в которую
                      входит в том числе и пакет xOffroad. В своём классе он
                      также является фаворитом.
                    </Card.Text>
                    <Card.Title>Цена от 7 100 000 сом</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW X7
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfQdQl10tLhu1XzWVo7puMLWFmdkAj5DOPccf%25Z8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giLhNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYVDKWh1DMztIA1eqVYDafz23jmztYRSDXR67aftxdYrIw1RSfWQt4S%25VxdSeZfq6uzWQdjcFNt3aeZQ6KI01XRjcZwBvLmrx6Kc%252GyF4WwBKup9C5Fe%252B3ibMEIjup2XHBpmv63iprJqYSGwXHi4TnYu9%25rJHFl5Ifou4TJIs8vWL3FlTv0PnvyXIslGAMwMCrv0s9OfQ6E4GA0ogSZkNF9OALUdy%25kIogOybQh0nvLUgChZnA5GybUEqc5289ChbNmKwYPoEqhk7BDzMLNmqn12cjDyk7m5VnJbYCn178zBZgtE5V1Pa29lfN8zVMRJDmSkPazDxTLddnMRaYWD0vQ5DxRteYAcZ8YWxfj0LCcPteWS6AyoKMfjedwHC5BDS6jQ%25J3r2Ydw6ZuTXVptQ%25wc3lCLifZu%25KXsxsHSc3uBrE5TJdKX324NM%25TQBrXpFOgilZ24riIgUzscpF4Hv5xR0KiIFJG7bWABHvIT91lgO2JGvloRsUgpT9GsLxmEUilo90yG1WbHsLoAC1BMhJPLzj1EoKG%25xyPnvzIJ9gwO30lda"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин ● Дизель
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Новый BMW X7 представляет собой элегантное сочетание
                      индивидуальности и солидности. Несмотря на величественный
                      вид, он создает впечатление удивительной легкости и
                      динамичности благодаря лаконичному спортивному дизайну.
                      Шарм – это его суть. А элегантность – его характер.
                    </Card.Text>
                    <Card.Title>Цена от 7 900 000 сом</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW iX
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfXGPb10tLhu1XzWVo7puMLWFmdkAj5DOP7tFkZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74gijhNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYVKwWh1DMztioCeqVYDafHL2jmztYRSFxy67aftxdIfMw1RSfWQorK%25VxdSeZLjtuzWQdjcyUh3aeZQ6KCvSXRjcZwBEpIrx6Kc%252Nr%254WwBKupkb8Fe%252B3inhOIjup2XH5D10UkNh5EWkVAbnkq8Ne3zOh5nmPklcagq857MjH0RUmP81D6BAxb7MPVYwfdWh1DMzt%25HAeqVYDafu4AjmztYRS3FZ67aftxdIicw1RSfWQovu%25VxdSeZ40GuzWQdjcFbX3aeZQ6KC2RXRjcZwBvgLrx6Kc%252yKe4WwBKupCouFe%252B3iKarIjup2XH5rcv63iprJ8OWGwgiEPyTpRBYnHZ0KEcw2FD4fXu1N"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black", color: "blue" }}>
                      ⚡ Полностью электрический
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Новое чудо от производителя BMW. Видение, воплотившееся в
                      реальность. Определение электромобильности. Благодаря
                      высокоэффективной технологии BMW eDrive и полностью
                      электрическому приводу BMW iX обладает внушительным
                      запасом хода и впечатляющей динамикой разгона с места.
                    </Card.Text>
                    <Card.Title>Цена от 7 740 000 сом</Card.Title>
                  </Card.Body>
                </Card>
              </Paper>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography style={{ fontWeight: "bold" }}>
                {" "}
                2,3,4-серия
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Paper
                elevation={3}
                className="d-flex flex-wrap margin-auto"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  margin: "auto",
                  border: "20px",
                  padding: "60px",
                  width: "100%",
                  background: "grey",
                }}
              >
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW 2-cерии Coupe
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf6JZg10tLhu1XzWVo7puMLWFmdkAj5DOPitFBZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74gijWNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYV9FWh1DMztIVGeqVYDafz88jmztYRSGtM67aftxdRLww1RSfWQluC%25VxdSeZsbtuzWQdjc0X73aeZQ6KAn6XRjcZwBO5zrx6Kc%252g864WwBKupCVTFe%252B3iuPIIjup2XH31xv63iprJ2CkGwXHi4TpWj9%25rJHFlievou4TJIs1SfL3FlTv0YGCyXIslGATwJCrv0s9Ol%259E4GA0og8ZTNF9OALUPWRkIogOybMfunvLUgChDTD5GybUEqYuF89ChbNmtXMPoEqhk7f6vMLNmqn1SvjDyk7m5VKdTYCn178zBPltE5V1PaHIkfN8zVMRJGdSkPazDxT%257dnMRaYWluEQ5DxRtesulZ8YWxfjtgucPteWS6ArEKMfjedw9%252BDS6jQ%25dhx2Ydw6ZujlZptQ%25wc3bKeifZu%25KXwuDHSc3uBrq36JdKX324mbyTQBrXpF3PalZyrU1OIXYuaq4y9%25UwZ3Hzix2K8b"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин ● Дизель
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Внешность, динамика и маневренность модели не оставляют
                      сомнений в ее амбициях, а сочетание высокой практичности и
                      универсальности с инновационными технологиями гарантирует
                      максимальный комфорт, километр за километром.
                    </Card.Text>
                    <Card.Title>Цена от 3 370 000 сом</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW 2-серии Gran Coupe
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfjnsd10tLhu1XzWVo7puMLWFmdkAj5DOPFtpDZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giZFNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYV2GWh1DMztifjeqVYDafHS7jmztYRSJTN67aftxdT%25yw1RSfWQlEC%25VxdSeZsNjuzWQdjc0ka3aeZQ6KoInXRjcZwBLnmrx6Kc%252yu84WwBKupk9PFe%252B3inXVIjup2XH5rGv63iprJ8iKGwXHi4TPHA9%25rJHFlMa3ou4TJIsDpLL3FlTv0YfeyXIslGAtSECrv0s9Ofm6E4GA0ogS73NF9OALUd7SkIogOybAC7nvLUgChOU45GybUEqgmP89ChbNmU3OPoEqhk7bXHMLNmqn1hUFDyk7m5VqQ5YCn178zmZptE5V1Pa7c2fN8zVMR1LCSkPazDxVycdnMRaYWBA1Q5DxRte2oNZ8YWxfjpyKcPteWS6iHdKMfjedwHJ8BDS6jQ%25JTb2Ydw6ZuToPptQ%25wc3lLJifZu%25KXsEyHSc3uBr0UPJdKX324AblTQBrXpFOjOlZ24riIpgSscpF4HviR30KiIFJGHxyABHvIT9JWOO2JGvloTfcgpT9GsLlFFUilo90ysjbbH8oVe7C9cvwRL8kIVFHGO6AusTSz"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Внешность, динамика и маневренность модели не оставляют
                      сомнений в ее амбициях, а сочетание высокой практичности и
                      универсальности с инновационными технологиями гарантирует
                      максимальный комфорт, километр за километром.
                    </Card.Text>
                    <Card.Title>Цена от 2 920 000 сом</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW 3-cерии
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2krlROWUmgXASRCrm608Gp1oEiydnpDMLWHNO9cvwXzZjQixUG4WsaBuCLB9ulCP5Ga2LWD3gXAjHdpsv6OgHqvZ2aKBfXRTod0Ff4hFUW7ckagdyhYgMgNgalmlOECUkUS37sgNEbnbHh10UkNh5hiXVAbnkq8cWzzOh5nmPKMRagq857MB2oRUmP81D2Gvxb7MPVYp9VWh1DMztioUeqVYDafHLVjmztYRSFLl67aftxdIWCw1RSfWQvSK%25VxdSeZGWtuzWQdjcy6h3aeZQ6KCwrXRjcZwBEcSrx6Kc%252NKJ4WwBKupkmjFe%252B3inZIIjup2XH5Vsv63iprJ8OaGwXHi4TPge9%25rJHFlM4You4TJIsD8qL3FlTv0JlwyXIslGATsRCrv0s9OlguE4GA0ogsPqNF9OALU0MLkIogOybADQnvLUgChOrM5GybUEqY3P89ChbNmtfkPoEqhk7fSGMLNmqn1SdiDyk7m5Vd%25IYCn178zQXutE5V1PaZ2GfN8zVMRcpcSkPazDxM07dnMRaYWDAQQ5DxRteYVVZ8YWxfjtOccPteWS6fvMKMfjedwe4XBDS6jQ%25I4r2YI6lUJujnWqAwIrxlRYechZ7dfCs"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин ● Дизель
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Внешность, динамика и маневренность модели не оставляют
                      сомнений в ее амбициях, а сочетание высокой практичности и
                      универсальности с инновационными технологиями гарантирует
                      максимальный комфорт, километр за километром.
                    </Card.Text>
                    <Card.Title>Цена от 3 280 000 сом</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW 4-серии серии Coupe
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf6Jpw10tLhu1XzWVo7puMLWFmdkAj5DOPFtprZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giUXNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYV2GWh1DMztzC5eqVYDafHS6jmztYRSJTN67aftxdT%25hw1RSfWQluC%25VxdSeZsNEuzWQdjc0k13aeZQ6KoInXRjcZwBLnUrx6Kc%252yud4WwBKupC3PFe%252B3inXvIjup2XH5pcv63iprJ8i0GwXHi4TPzu9%25rJHFlMRLou4TJIsDbWL3FlTv0YhwyXIslGAt5VCrv0s9OfDJE4GA0ogSYVNF9OALU0OXkIogOybAgjnvLUgChOq85GybUEqgtE89ChbNmUfcPoEqhk7bSqMLNmqn1hd2Dyk7m5VqGhYCn178zm9MtE5V1PaZlqfN8zVMRcvySkPazDxK9QdnMRaYWB2tQ5DxRte2pkZ8YWxfjpiOcPteWS6iv2KMfjedwHG5BDS6jQ%25JL92Ydw6ZuTAnptQ%25wc3lOHifZu%25KXsxsHSc3uBrK16JdKX324BVTTQBrXpF2PflZ24riIpuuscpF4Hvia00KiIFJG18bABNIqab9FSrW1vNyXq3B4lxTjHpDm"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин ● Дизель
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Внешность, динамика и маневренность модели не оставляют
                      сомнений в ее амбициях, а сочетание высокой практичности и
                      универсальности с инновационными технологиями гарантирует
                      максимальный комфорт, километр за километром.
                    </Card.Text>
                    <Card.Title>Цена от 3 740 000 сом</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW 4-cерии Gran Coupe
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfvrZg10tLhu1XzWVo7puMLWFmdkAj5DOPEtpuZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giAqNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYXfvWh1DMztIV8eqVYDafHJEjmztYRSJOM67aftxdT%25yw1RSfWQlEC%25VxdSeZsNeuzWQdjc0kW3aeZQ6KoInXRjcZwBLnUrx6Kc%252yu84WwBKupCoeFe%252B3inoVIjup2XH5rcv63iprJ849GwXHi4TPHB9%25rJHFlMa3ou4TJIsDxyL3FlTv0YhiyXIslGAtqjCrv0s9OfmuE4GA0ogSPaNF9OALUdtzkIogOybAM5nvLUgChOU45GybUEqgtE89ChbNmUfCPoEqhk7bSKMLNmqn1hdmDyk7m5VqQpYCn178zm9qtE5V1Pa7oDfN8zVMRcsmSkPazDxKGCdnMRaYWBoZQ5DxRte2ptZ8YWxfjpiScPteWS6iH5KMfjedwHJUBDS6jQ%25J9i2Ydw6ZuToPptQ%25wc3lP9ifZu%25KXsEyHSc3uBr0URJdKX324AbMTQBrXpFOhslZ24riIg6gscpF4HviUd0KiIFJGHxXABHvIT9JWOO2JGvloT44gpT9GsLleUUilo90ysP2bH8oVe7C9cvwRL8kIVFHGO6AusTSz"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Дизель
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Внешность, динамика и маневренность модели не оставляют
                      сомнений в ее амбициях, а сочетание высокой практичности и
                      универсальности с инновационными технологиями гарантирует
                      максимальный комфорт, километр за километром.
                    </Card.Text>
                    <Card.Title>Цена от 3 850 000 сом</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW 4-cерии Cabrio
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf6J7P10tLhu1XzWVo7puMLWFmdkAj5DOPFtpxZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giLPNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYV2GWh1DMztifjeqVYDafHJEjmztYRSJwb67aftxdTCyw1RSfWQlEm%25VxdSeZG4NuzWQdjc9NO3aeZQ6KownXRjcZwBLqirx6Kc%252y154WwBKupCaZFe%252B3inXvIjup2XH5pcv63iprJ8i0GwXHi4TPzu9%25rJHFlMUxou4TJIsDb6L3FlTv0YOcyXIslGAtaKCrv0s9OfDJE4GA0ogSYVNF9OALU0PnkIogOybAgrnvLUgChOU65GybUEqgmP89ChbNmUfzPoEqhk7bSkMLNmqn1hv8Dyk7m5VdJbYCn178zQFotE5V1PaZT4fN8zVMRcGdSkPazDxKBYdnMRaYWB2NQ5DxRte2pAZ8YWxfjpIUcPteWS6ivnKMfjedwHGpBDS6jQ%25JL92Ydw6ZuTAmptQ%25wc3lO5ifZu%25KXc7jHSc3uBrK1JJdKX324By2TQBrXpF2CSlZyrU1OIXYuaq4y9%25UwZ3Hzix2K8b"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Внешность, динамика и маневренность модели не оставляют
                      сомнений в ее амбициях, а сочетание высокой практичности и
                      универсальности с инновационными технологиями гарантирует
                      максимальный комфорт, километр за километром.
                    </Card.Text>
                    <Card.Title>Цена от 4 300 000 сом</Card.Title>
                  </Card.Body>
                </Card>
              </Paper>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography style={{ fontWeight: "bold" }}>
                {" "}
                5,7,8-серия
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Paper
                elevation={3}
                className="d-flex flex-wrap margin-auto"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  margin: "auto",
                  border: "20px",
                  padding: "60px",
                  width: "100%",
                  background: "grey",
                }}
              >
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW 5-cерии
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf7GZg10tLhu1XzWVo7puMLWFmdkAj5DOP4tp8Z8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giASNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYpqKWh1DMztIBUeqVYDafv3ijmztYRSJdw67aftxdTA%25w1RSfWQlsn%25VxdSeZs3EuzWQdjc0kN3aeZQ6KoInXRjcZwBLnUrx6Kc%252y5e4WwBKupC3PFe%252B3iEXVIjup2XHNplv63iprJkxkGwXHi4TnxY9%25rJHFlMExou4TJIsDfzL3FlTv0YGeyXIslGAt9ECrv0s9OfeFE4GA0ogSTNNF9OALUdwmkIogOybQ%255nvLUgChZYW5GybUEqc5O89ChbNmKwpPoEqhk7B%25tMLNmqn12YYDyk7m5VpKxYCn178ziBwtE5V1Pa7ZsfN8zVMR1cdSkPazDxVGAdnMRaYWz0QQ5DxRteap%25Z8YWxfjRifcPteWS6xHtKMfjedwWJsBDS6jQ%25e5c2Ydw6Zuj8FptQ%25wc3llFifZu%25KXssdHSc3uBr016JdKX324A8wTQBrXpFOPflZ24riIgUiscpF4HvUbJ0KiIFJGbhRABHvIT9hqbO2JGvloqm0gpT9GsLm7hUilo90y71PbHsLoAC1YmhJ0yLOEVk5qTACygNzn4mlOECUka5M7sgNEbnRZf10UkNh5xcQVAbnkq8WwazOh5nmPeLFagq857MjyjRUmP81D76Axb7MPVY1GnWh1DMztV9eeqVYDafz9jjmBYXGuSDOPLFtBZ8X5mMxoRCz1lr"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин ● Дизель
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Внешность, динамика и маневренность модели не оставляют
                      сомнений в ее амбициях, а сочетание высокой практичности и
                      универсальности с инновационными технологиями гарантирует
                      максимальный комфорт, километр за километром.
                    </Card.Text>
                    <Card.Title>Цена от 4 250 000 сом</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW 7-серии
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfakIl10tLhu1XzWVo7puMLWFmdkAj5DOP4Lj%25Z8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giALNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYF1zWh1DMztra5eqVYDaf4RLjmztYRSG0l67aftxdTAww1RSfWQluC%25VxdSeZsNGuzWQdjc9Fk3aeZQ6KoAiXRjcZwBEvirx6Kc%252N544WwBKupk8hFe%252B3in7VIjup2XH51xv63iprJ8KKGwXHi4TPse9%25rJHFlM0oou4TJIsDAwL3FlTv0YLvyXIslGAtv9Crv0s9OfRQE4GA0ogSx8NF9OALUdW8kIogOybQ5jnvLUgChZ875GybUEqcdV89ChbNmUfNPoEqhk7bSeMLNmqn1hdmDyk7m5VqQpYCn178zm9MtE5V1PaZZefN8zVMRcsmSkPazDxKBDdnMRaYWB2tQ5DxRte2FyZ8YWxfjpIkcPteWS6i%253KMfjedwHuIBDS6jQ%25JLh2Ydw6ZuTAnptQ%25wc3lOHifZu%25KXcGIHSc3uBrE9pJdo3Om04uMwVbXov6Ojd%25p12aKZng"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин ● Дизель
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Внешность, динамика и маневренность модели не оставляют
                      сомнений в ее амбициях, а сочетание высокой практичности и
                      универсальности с инновационными технологиями гарантирует
                      максимальный комфорт, километр за километром.
                    </Card.Text>
                    <Card.Title>Цена от 7 330 000 сом</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW 7-серии Long
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfFdVw10tLhu1XzWVo7puMLWFmdkAj5DOP45V%25Z8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74gAThNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYpzaWh1DMztIA1eqVYDafH6ojmztYRSJyF67aftxdIXCw1RSfWQveE%25VxdSeZL4buzWQdjcyN33aeZQ6KCkgXRjcZwBEhmrx6Kc%252Nqz4WwBKupkHaFe%252B3inJIIjup2XH5TWv63iprJ8vrGwXHi4TPby9%25rJHFlM1tou4TJIsDVEL3FlTv0YCayXIslGAtEUCrv0s9OfDhE4GA0ogSYVNF9OALU0llkIogOybADynvLUgChOYU5GybUEqgtc89ChbNmUFnPoEqhk7ffaMLNmqn1SHUDyk7m5VdQ5YCn178zQZPtE5V1PaZ3GfN8zVMRcXySkPazDxKe6dnMRaYWBjXQ5DxRte2JyZ8YWxfjpTKcPteWS6fUaKMfjedwSbBBDS6jQ%25dE82Ydw6ZuO8pptvwsbT365emO%25v4WsxtjKqc1QSE0"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин ● Дизель
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Внешность, динамика и маневренность модели не оставляют
                      сомнений в ее амбициях, а сочетание высокой практичности и
                      универсальности с инновационными технологиями гарантирует
                      максимальный комфорт, километр за километром.
                    </Card.Text>
                    <Card.Title>Цена от 9 790 000 сом</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW 8-серии Coupe
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://www.bmw.ru/content/dam/bmw/common/all-models/8-series/coupe/2022/navigation/bmw-8series-coupe-modellfinder.png"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин ● Дизель
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Внешность, динамика и маневренность модели не оставляют
                      сомнений в ее амбициях, а сочетание высокой практичности и
                      универсальности с инновационными технологиями гарантирует
                      максимальный комфорт, километр за километром.
                    </Card.Text>
                    <Card.Title>Цена от 8 330 000 сом</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW 8-cерии Cabrio
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://www.bmw.ru/content/dam/bmw/common/all-models/8-series/convertible/2022/navigation/bmw-8-convertible-modelfinder-stage2-890x501.png"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин ● Дизель
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Внешность, динамика и маневренность модели не оставляют
                      сомнений в ее амбициях, а сочетание высокой практичности и
                      универсальности с инновационными технологиями гарантирует
                      максимальный комфорт, километр за километром.
                    </Card.Text>
                    <Card.Title>Цена от 9 370 000 сом</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW 8-серии Gran Coupe
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://www.bmw.ru/content/dam/bmw/common/all-models/8-series/gran-coupe/2022/navigation/bmw-8series-gran-coupe-modelfinder-stage2-890x501.png"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин ● Дизель
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Внешность, динамика и маневренность модели не оставляют
                      сомнений в ее амбициях, а сочетание высокой практичности и
                      универсальности с инновационными технологиями гарантирует
                      максимальный комфорт, километр за километром.
                    </Card.Text>
                    <Card.Title>Цена от 8 000 000 сом</Card.Title>
                  </Card.Body>
                </Card>
              </Paper>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography style={{ fontWeight: "bold" }}> i-серия</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Paper
                elevation={3}
                className="d-flex flex-wrap margin-auto"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  margin: "auto",
                  border: "20px",
                  padding: "60px",
                  width: "100%",
                  background: "grey",
                }}
              >
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW i4 M50
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf6JZg10tLhu1XzWVo7puMLWFmdkAj5DOP5tpFZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74gtZLNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYXw9Wh1DMztr9JeqVYDaf4RLjmztYRSG3O67aftxd9WMw1RSfWQoeu%25VxdSeZLdYuzWQdjcyUR3aeZQ6KChrXRjcZwBETSrx6Kc%252Nl74WwBKupksaFe%252B3iKovIjup2XHBpxv63iprJ2TWGwXHi4TCze9%25rJHFlERLou4TJIsFfpL3FlTv0ISUyXIslGAvdCCrv0s9OGJJE4GA0og9QNNF9OALUxWpkIogOybWu0nvLUgChe2B5GybUEqjpI89ChbNm6iCPoEqhk7ZSLMLNmqn1cI9Dyk7m5VpQ%25YCn178zieptE5V1PaH2kfN8zVMRJpuSkPazDxTA6dnMRaYWz2YQ5DxRteapDZ8YWxfjRiscPteWS6xHeKMfjedwWJOBDS6jQ%25e5W2Ydw6Zuj8KptQ%25wc3lscifZu%25KXs0BHSc3uBr0AtJdKX324AOQTQBrXpFOgVlZ24riIgkSscpF4HvUnO0KiIFJGbdkABHvIT9hMdO2JGvloqVdgpT9GsLmzbUilo90yWc0bHsLoACRN4hJPLzj1EoKG%25xyPnvzIJ9gwO30lda"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />
                    <Card.Title style={{ borderColor: "black", color: "blue" }}>
                      ⚡ Полностью электрический
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Внешность, динамика и маневренность модели не оставляют
                      сомнений в ее амбициях, а сочетание высокой практичности и
                      универсальности с инновационными технологиями гарантирует
                      максимальный комфорт, километр за километром.
                    </Card.Text>
                    <Card.Title>Цена не указана</Card.Title>
                  </Card.Body>
                </Card>
              </Paper>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ background: "dark" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography style={{ fontWeight: "bold" }}>
                {" "}
                <img
                  src="https://i1.wp.com/image.jimcdn.com/app/cms/image/transf/dimension=4096x4096:format=png/path/sc8f10f5dd8aaf2c3/image/iac0036f9573b2c49/version/1508941094/image.png"
                  alt="#"
                  width="70px"
                />{" "}
                - серия
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Paper
                elevation={3}
                className="d-flex flex-wrap margin-auto"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  margin: "auto",
                  border: "20px",
                  padding: "60px",
                  width: "100%",
                  background: "grey",
                }}
              >
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW M3 Competition
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf0jUi10tLhu1XzWVo7puMLWFmdkAj5DOPitppZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giUFNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYVeHWh1DMzt4i%25eqVYDafaOojmztYRSJdw67aftxdTgDw1RSfWQlEW%25VxdSeZG4NuzWQdjc9NO3aeZQ6KownXRjcZwBL1Lrx6Kc%252ywQ4WwBKupCVFFe%252B3in2ZIjup2XH51zv63iprJ8VWGwXHi4TPgR9%25rJHFlMgPou4TJIsDoiL3FlTv0YPiyXIslGAT5tCrv0s9Ol%259E4GA0og8ZTNF9OALUPwnkIogOybMxrnvLUgChDWP5GybUEqY6e89ChbNmtstPoEqhk7NigMLNmqn1kHJDyk7m5VnbbYCn178z5GPtE5V1Pa12SfNwVKJZR19mspzweqKhN7DlMA8nFB"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Внешность, динамика и маневренность модели не оставляют
                      сомнений в ее амбициях, а сочетание высокой практичности и
                      универсальности с инновационными технологиями гарантирует
                      максимальный комфорт, километр за километром.
                    </Card.Text>
                    <Card.Title>Цена от 7 700 000 сом</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW M4 Competition Coupe
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf0jsd10tLhu1XzWVo7puMLWFmdkAj5DOP5tpsZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giU2NF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYV2KWh1DMztzA9eqVYDafa66jmztYRSJdw67aftxdT%25hw1RSfWQluC%25VxdSeZsNEuzWQdjc0kj3aeZQ6KAnVXRjcZwBLnUrx6Kc%252yu84WwBKupk3IFe%252B3in2ZIjup2XH5psv63iprJ8VaGwXHi4TPzu9%25rJHFlM2oou4TJIsDxyL3FlTv0YheyXIslGAtq%25Crv0s9OfqtE4GA0ogS%25oNF9OALUdtzkIogOybAgrnvLUgChOq45GybUEqgtE89ChbNmUfKPoEqhk7bI5MLNmqn1SHUDyk7m5VdFtYCn178zQZPtE5V1PaZcyfN8zVMRcKlSkPazDxKrodnMRaYWBCXQ5DxRte2vFZ8YWxfjpTCcPteWS6iliKMfjedwHVxBDS6jQ%25dhq2Ydw6ZuQNPptQ%25wc3ZeeifZu%25KXcmHHSc3uBrKMQJdKX324BkDTQBrXpFXL9lZ24riICLRscC4bVgvrt3RmFCoub%25cXJaHWpBPh"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Внешность, динамика и маневренность модели не оставляют
                      сомнений в ее амбициях, а сочетание высокой практичности и
                      универсальности с инновационными технологиями гарантирует
                      максимальный комфорт, километр за километром.
                    </Card.Text>
                    <Card.Title>Цена от 7 800 000 сом</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW M5 Competition
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfy91T10tLhu1XzWVo7puMLWFmdkAj5DOP4tFhZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74gA6TNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYV2KWh1DMztzA8eqVYDafaOujmztYRSJxO67aftxdT%25yw1RSfWQlu9%25VxdSeZsNEuzWQdjc0kj3aeZQ6KownXRjcZwBE%25mrx6Kc%252NuF4WwBKupkBTFe%252B3in76Ijup2XH5VXv63iprJ8OWGwXHi4TPO89%25rJHFlM1tou4TJIsDyyL3FlTv0YPUyXIslGAtMrCrv0s9OfD1E4GA0ogSi5NF9OALU0ZkkIogOybADynvLUgChOYZ5GybUEqg4D89ChbNmtpOPoEqhk7frDMLNmqn1Sd5Dyk7m5VdQoYCn178zQZJtE5V1PaZ3GfN8zVMRc4XSkPazDxKiodnMRaYWBHBQ5DxRteYoNZ8YWxfjtzzcPteWS6fgoKMfjedwSGDBDS6jQ%25dnW2Ydw6ZuQ5cptQ%25wc3ZCzifZu%25KX%25GIHSc3uBroCUJdo3Om04uMwVbXov6Ojd%25p12aKZng"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Внешность, динамика и маневренность модели не оставляют
                      сомнений в ее амбициях, а сочетание высокой практичности и
                      универсальности с инновационными технологиями гарантирует
                      максимальный комфорт, километр за километром.
                    </Card.Text>
                    <Card.Title>Цена от 9 800 000 сом</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW M8 Coupe
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://www.bmw.ru/content/dam/bmw/marketRU/bmw_ru/bmw-8series-coupe-modellfinder-copy.png"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Внешность, динамика и маневренность модели не оставляют
                      сомнений в ее амбициях, а сочетание высокой практичности и
                      универсальности с инновационными технологиями гарантирует
                      максимальный комфорт, километр за километром.
                    </Card.Text>
                    <Card.Title>Цена от 12 320 000 сом</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW X5 M Competition
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf0jxA10tLhu1XzWVo7puMLWFmdkAj5DOPa52%25Z8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giZQNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYVezWh1DMSkph5u99VAbnkMLZACAKGhJ0yLkItJG8OQABHvIL38BrUMBJdKX3IjEdwOH3BDS6j3a9DxT0jdnMRajm4n12HYDyk7mag%25ybQCsnvLUgmlWv0YGeyXIslgpVXH5JKv63iplZh6KCbqXRjcZptARSG0167aftZ8J7MrJxRUmP8tEBUkwDH7sgNE89dsLxkRUilo9E4DiI1l3scpF49%25nc3bpmifZu%254Wyfj0EccPteW%25VvPaH9mfN8zVWhXNmK4nPoEqhVA6ogSxZNF9OAhJRFlMLAou4TJAB7upkIIFe%252BJdUeZLGJuzWQdBDsztPloeqVYDdniq8NeqzOh5nDycOEozyqTACynvfT9FqaO2JGvyXP24uYiTQBrXv6NQ%25Jhx2Ydw6XRoYWBCXQ5DxR67F5VdaxYCn17RUuChDmH5GybU7seGAnaVCrv0sUizrJykaGwXHiscqwB6SSrx6KcifOxdRLsw1RSfcPT1D7snxb7MPfN2bnUiA10UkNPoQ0yscObH8oVe7C9cvwRL8kIVFHGO6AusTSz"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Внешность, динамика и маневренность модели не оставляют
                      сомнений в ее амбициях, а сочетание высокой практичности и
                      универсальности с инновационными технологиями гарантирует
                      максимальный комфорт, километр за километром.
                    </Card.Text>
                    <Card.Title>Цена от 11 820 000 сом</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    BMW X6 M Competition
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfy91y10tLhu1XzWVo7puMLWFmdkAj5DOPcj2%25Z8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74g383NF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYVegWh1DMSkph5uHhVAbnkMLZAC0KGhJ0yLkItJG7STABHvIL38BrUMdJdKX3IjEdwdkHBDS6j3a9DxM77dnMRajm4n125FDyk7mag%25ybQ3nnvLUgmlWv0IfayXIslgpVXHXaKv63iplZh6KAr1XRjcZptARSDXt67aftZ8J7MnsVRUmP8tEBUkait7sgNE89dsLmjFUilo9E4DiIg5kscpF49%25nc3lO5ifZu%254WyfjpwucPteW%25VvPaHIGfN8zVWhXNmK3LPoEqhVA6ogS6kNF9OAhJRFlMUjou4TJAB7upklNFe%252BJdUeZL%25tuzWQdBDsztIA8eqVYDdniq83aDzOh5nDycOEjN9qTACynvfT9aggO2JGvyXP24mbyTQBrXv6NQ%25eEq2Ydw6XRoYWz2YQ5DxR67F5VqQpYCn17RUuChZD25GybU7seGAt9HCrv0sUizrJ8vDGwXHiscqwBEgnrx6KcifOxd9Uew1RSfcPT1D7shxb7MPfN2bnUiq10tNWuR5Eiyr6ktMLWo0CqXhFUOKe"
                  />
                  <Card.Body>
                    <hr style={{ fontWeight: "bold", size: "25px" }} />

                    <Card.Title style={{ borderColor: "black" }}>
                      Бензин
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      Внешность, динамика и маневренность модели не оставляют
                      сомнений в ее амбициях, а сочетание высокой практичности и
                      универсальности с инновационными технологиями гарантирует
                      максимальный комфорт, километр за километром.
                    </Card.Text>
                    <Card.Title>Цена от 12 140 000 сом</Card.Title>
                  </Card.Body>
                </Card>
              </Paper>
            </AccordionDetails>
          </Accordion>
        </Accordion>
      </div>
      <div
        style={{
          border: "groove 2px",
          borderColor: "black",
          paddingTop: "20px",
        }}
      >
        <h1
          style={{
            marginTop: "20px",
            margin: "auto",
            justifyContent: "center",
            display: "flex",
          }}
        >
          Предлагаемые модели
        </h1>{" "}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "10px",
          }}
        >
          <Card
            style={{
              width: "25rem",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Card.Title
              style={{
                background: "black",
                color: "white",
                fontSize: "25px",
              }}
            >
              BMW X6 M Competition
            </Card.Title>
            <Card.Img
              variant="top"
              src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfy91y10tLhu1XzWVo7puMLWFmdkAj5DOPcj2%25Z8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74g383NF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYVegWh1DMSkph5uHhVAbnkMLZAC0KGhJ0yLkItJG7STABHvIL38BrUMdJdKX3IjEdwdkHBDS6j3a9DxM77dnMRajm4n125FDyk7mag%25ybQ3nnvLUgmlWv0IfayXIslgpVXHXaKv63iplZh6KAr1XRjcZptARSDXt67aftZ8J7MnsVRUmP8tEBUkait7sgNE89dsLmjFUilo9E4DiIg5kscpF49%25nc3lO5ifZu%254WyfjpwucPteW%25VvPaHIGfN8zVWhXNmK3LPoEqhVA6ogS6kNF9OAhJRFlMUjou4TJAB7upklNFe%252BJdUeZL%25tuzWQdBDsztIA8eqVYDdniq83aDzOh5nDycOEjN9qTACynvfT9aggO2JGvyXP24mbyTQBrXv6NQ%25eEq2Ydw6XRoYWz2YQ5DxR67F5VqQpYCn17RUuChZD25GybU7seGAt9HCrv0sUizrJ8vDGwXHiscqwBEgnrx6KcifOxd9Uew1RSfcPT1D7shxb7MPfN2bnUiq10tNWuR5Eiyr6ktMLWo0CqXhFUOKe"
            />
            <Card.Body>
              <hr style={{ fontWeight: "bold", size: "25px" }} />

              <Card.Title style={{ borderColor: "black" }}>Бензин</Card.Title>
              <Card.Text>
                {" "}
                Внешность, динамика и маневренность модели не оставляют сомнений
                в ее амбициях, а сочетание высокой практичности и
                универсальности с инновационными технологиями гарантирует
                максимальный комфорт, километр за километром.
              </Card.Text>
              <Card.Title>Цена от 12 140 000 сом</Card.Title>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "25rem",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Card.Title
              style={{
                background: "black",
                color: "white",
                fontSize: "25px",
              }}
            >
              BMW M5 Competition
            </Card.Title>
            <Card.Img
              variant="top"
              src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfy91T10tLhu1XzWVo7puMLWFmdkAj5DOP4tFhZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74gA6TNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYV2KWh1DMztzA8eqVYDafaOujmztYRSJxO67aftxdT%25yw1RSfWQlu9%25VxdSeZsNEuzWQdjc0kj3aeZQ6KownXRjcZwBE%25mrx6Kc%252NuF4WwBKupkBTFe%252B3in76Ijup2XH5VXv63iprJ8OWGwXHi4TPO89%25rJHFlM1tou4TJIsDyyL3FlTv0YPUyXIslGAtMrCrv0s9OfD1E4GA0ogSi5NF9OALU0ZkkIogOybADynvLUgChOYZ5GybUEqg4D89ChbNmtpOPoEqhk7frDMLNmqn1Sd5Dyk7m5VdQoYCn178zQZJtE5V1PaZ3GfN8zVMRc4XSkPazDxKiodnMRaYWBHBQ5DxRteYoNZ8YWxfjtzzcPteWS6fgoKMfjedwSGDBDS6jQ%25dnW2Ydw6ZuQ5cptQ%25wc3ZCzifZu%25KX%25GIHSc3uBroCUJdo3Om04uMwVbXov6Ojd%25p12aKZng"
            />
            <Card.Body>
              <hr style={{ fontWeight: "bold", size: "25px" }} />

              <Card.Title style={{ borderColor: "black" }}>Бензин</Card.Title>
              <Card.Text>
                {" "}
                Внешность, динамика и маневренность модели не оставляют сомнений
                в ее амбициях, а сочетание высокой практичности и
                универсальности с инновационными технологиями гарантирует
                максимальный комфорт, километр за километром.
              </Card.Text>
              <Card.Title>Цена от 9 800 000 сом</Card.Title>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "25rem",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Card.Title
              style={{
                background: "black",
                color: "white",
                fontSize: "25px",
              }}
            >
              BMW X5
            </Card.Title>
            <Card.Img
              variant="top"
              src="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfQJsd10tLhu1XzWVo7puMLWFmdkAj5DOPcQV%25Z8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74g37WNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYVs4Wh1DMztIAzeqVYDafM3ajmztYRSDXz67aftxdYrfw1RSfWQthj%25VxdSeZ4EYuzWQdjcFs73aeZQ6KIoqXRjcZwBvL4rx6Kc%252Gyn4WwBKupUIaFe%252B3ibMUIjup2XH5qMv63iprJqYSGwXHi4TnYu9%25rJHFl5Ifou4TJIs8vWL3FlTv0P6PyXIslGAtnUCrv0s9OfQ6E4GA0ogSZhNF9OALUdcnkIogOybQCunvLUgChZq15GybUEqcmO89ChbNmKwYPoEqhk7BDDMLNmqn12cjDyk7m5VnJbYCn178zBGPtE5V1Pa29yfN8zVMRpoMSkPazDxTY7dnMRaYWl2OQ5DxRtesCZZ8YWxfjtzzcPteWS6fgoKMfjedwSkYBDS6jQ%25gEk2Ydw6ZuUNCptQ%25wc3bpjifZu%25KXsnDHSc3uBr0FvJdKX324AIxTQBrXpFOnNlZ24riIg6gscpF4Hv5tX0KiIFJGbhTABHvIT9hqxO2JGvloMjegpT9GsLx0bUilo90yYw0bHsLoACR1%25hJ0yLOEozjqTACygNSd4mlOECUkeE87sYEx%25anCpLXjNYPox9syh3b4gAcW"
            />
            <Card.Body>
              <hr style={{ fontWeight: "bold", size: "25px" }} />

              <Card.Title style={{ borderColor: "black" }}>
                Бензин ● Дизель
              </Card.Title>
              <Card.Text>
                {" "}
                Изначально, X5 всегда считался одним из лучших автомобилей в
                своём классе начиная с кузова Е53. С новым поколением X5 получил
                другой кузов, который добавил брутальности. Для клиентов
                предлагается большой выбор комплектаций.
              </Card.Text>
              <Card.Title>Цена от 6 040 000 сом</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div>
        <Card className="bg-dark text-white">
          <Card.Img
            src="https://uncrate.com/p/2018/07/bmw-507-roadster-1.jpg"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title style={{ fontSize: "50px" }}>
              История создания концерна
            </Card.Title>
            <Card.Text style={{ fontSize: "20px" }}>
              История BMW начиналась в баварском Мюнхене, где в 1913 году
              немецкие промышленники Рапп и Отто открыли два небольших
              предприятия. Новые фирмы занимались производством авиационных
              моторов, и их руководители вскоре приняли решение объединиться,
              чтобы вместе выдержать жесткую рыночную конкуренцию.
            </Card.Text>
            <a
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "20px",
                color: "black",
              }}
              href="https://ru.wikipedia.org/wiki/BMW"
            >
              Узнать больше
            </a>
          </Card.ImgOverlay>
        </Card>
        <div></div>
      </div>
      <video
        style={{
          display: "block",
          margin: "auto",
          paddingTop: "50px",
        }}
        controls
        width="50%"
        autoPlay
        muted
        src={vidos}
        type="video/mp4"
      >
        {" "}
      </video>
    </div>
  );
};

export default MainPage;
