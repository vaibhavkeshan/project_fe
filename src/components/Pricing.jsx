import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { IoCheckmark } from "react-icons/io5";
const Pricing = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row text-center my-2">
          <h1 className="howItsWork">Pricing</h1>
        </div>
        <div className="row  m-auto ">
          <Box className="w-100  my-5 ">
            <div className="containercard ">
              <div className="containercarditems">
                <Card className="cardpricing  ">
                  <CardContent>
                    <div className="basicardcontent">
                      <span>Free</span>
                    </div>
                    <div className="paracarde">
                      <p>
                        Idea for those who've already got their Website up and
                        running and are seeking assistance to enhance and update
                        it further.
                      </p>
                    </div>
                    <div className="mothhcardcnt">
                      <span>Not</span>
                    </div>
                    <div className="rupeecardcnt">
                      <span>₹ 0</span>
                    </div>
                    <div className="linecard w-75 my-3"></div>
                    <div className="divcontent">
                      <IoCheckmark />
                      <span>Image quality upto 720p</span>
                    </div>
                    <div className="divcontent">
                      <IoCheckmark />
                      <span>Water mark on content</span>
                    </div>
                    <div className="divcontent">
                      <IoCheckmark />
                      <span>Only two free projects allowed</span>
                    </div>
                    <div className="divcontent">
                      <IoCheckmark />
                      <span>5 Builds allowed</span>
                    </div>
                    <div className="divcontent">
                      <IoCheckmark />
                      <span>Unlimited views</span>
                    </div>
                    <div className="linecard w-75 mt-3"></div>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">Upgrade</Button>
                  </CardActions> */}
                </Card>
              </div>
              <div className="containercarditems">
                <Card className="cardpricing " id="wMobile">
                  <CardContent>
                    <div className="basicardcontent">
                      <span>Per Project</span>
                    </div>
                    <div className="paracarde">
                      <p>
                        Idea if you want to buildor scale your website fast,with
                        the statergy calss included.
                      </p>
                    </div>
                    <div className="mothhcardcnt">
                      <span>1 month</span>
                    </div>
                    <div className="rupeecardcnt">
                      <span>₹ 999 </span>
                    </div>
                    <div className="linecard w-75 my-3"></div>
                    <div className="divcontent">
                      <IoCheckmark />
                      <span>1 months free timeline for image</span>
                    </div>
                    <div className="divcontent">
                      <IoCheckmark />
                      <span>Unlimited views</span>
                    </div>
                    <div className="divcontent">
                      <IoCheckmark />
                      <span>Image quality up to 720p</span>
                    </div>
                    <div className="divcontent">
                      <IoCheckmark />
                      <span>No Water Mark</span>
                    </div>

                    <div className="divcontent">
                      <IoCheckmark />
                      <span>Unlimited Premium Projects</span>
                    </div>
                    <div className="divcontent">
                      <IoCheckmark />
                      <span>5 build allowed</span>
                    </div>
                    {/* <div className="divcontent">
                      <IoCheckmark />
                      <span>Task delivered One-by-one</span>
                    </div> */}
                    {/* <div className="divcontent">
                      <IoCheckmark />
                      <span>Dedicated Dashboard</span>
                    </div> */}
                    <div className="linecard w-75 mt-3"></div>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">Upgrade</Button>
                  </CardActions> */}
                </Card>
              </div>

              <div className="containercarditems">
                <Card className="cardpricing " id="wMobile">
                  <CardContent>
                    <div className="basicardcontent">
                      <span>Timeline Price</span>
                    </div>
                    <div className="paracarde">
                      <p>
                        Idea if you want to buildor scale your website fast,with
                        the statergy calss included.
                      </p>
                    </div>
                    <div className="mothhcardcnt">
                      <span>1 month</span>
                    </div>
                    <div className="rupeecardcnt">
                      <span>₹ 99 </span>
                    </div>
                    <div className="linecard w-75 my-3"></div>
                    <div className="divcontent">
                      <IoCheckmark />
                      <span>1 months without watermark</span>
                    </div>
                    <div className="divcontent">
                      <IoCheckmark />
                      <span>Unlimited views</span>
                    </div>
                    <div className="divcontent">
                      <IoCheckmark />
                      <span>Image quality up to 720p</span>
                    </div>
                    <div className="divcontent">
                      <IoCheckmark />
                      <span>No Water Mark</span>
                    </div>

                    <div className="divcontent">
                      <IoCheckmark />
                      <span>Unlimited Premium Projects</span>
                    </div>
                    <div className="divcontent">
                      <IoCheckmark />
                      <span>5 build allowed</span>
                    </div>
                    {/* <div className="divcontent">
                      <IoCheckmark />
                      <span>Task delivered One-by-one</span>
                    </div> */}
                    {/* <div className="divcontent">
                      <IoCheckmark />
                      <span>Dedicated Dashboard</span>
                    </div> */}
                    <div className="linecard w-75 mt-3"></div>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">Upgrade</Button>
                  </CardActions> */}
                </Card>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
