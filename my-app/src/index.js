import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Grid, Image, Icon, Dropdown, Input, Segment, List, Button } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className='topmenu'>
          <Container className='topcontainer'>
            <Grid>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Image className='titleimages' href='#' src='https://i.imgur.com/9kLTdQ1.jpeg' alt='pencilholder'/>
                </Grid.Column>
                <Grid.Column verticalAlign='middle' textAlign='center' width={10}>
                  <Menu fluid vertical>
                    <Menu.Item href='#'>
                      <div className='titletext'>TOKYO PEN SHOP</div>
                    </Menu.Item>
                    <Menu.Item href='#'>
                      <div className='slogantext'>FOR PENS AS PRECISE AS YOUR THOUGHTS</div>
                    </Menu.Item>
                  </Menu>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Image className='titleimages' href='#' src='https://i.imgur.com/pykaWKm.jpeg' alt='freeship'/>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Menu.Item href='#' position='right'>
                  <div>LOG IN / REGISTER</div>
                </Menu.Item>
              </Grid.Row>
              <Grid.Row>
                <Menu.Item href='#' position='right'>
                  <div className='shopcart'><Icon name="shopping cart iconn"/>0 - $0.00
                  </div>
                </Menu.Item>
              </Grid.Row>
              <Grid.Row>
                <div className='dropdowntext'>
                  <Dropdown item text="Categories " icon="dropdown">
                    <Dropdown.Menu>
                      <Dropdown.Item>Limited Edition</Dropdown.Item>
                      <Dropdown.Item>Gel Ink Pens</Dropdown.Item>
                      <Dropdown.Item>Custom Multis</Dropdown.Item>
                      <Dropdown.Item>Ballpoint Pens</Dropdown.Item>
                      <Dropdown.Item>Mechanical Pencils</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className='dropdowntext'>
                  <Dropdown item text="Customer Service " icon="dropdown">
                    <Dropdown.Menu>
                      <Dropdown.Item>About Us</Dropdown.Item>
                      <Dropdown.Item>Log In / Register</Dropdown.Item>
                      <Dropdown.Item>Create Account</Dropdown.Item>
                      <Dropdown.Item>Shipping & Returns</Dropdown.Item>
                      <Dropdown.Item>Privacy Notice</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className='dropdowntext'>
                  <Menu.Item href='#'>New Items</Menu.Item>
                </div>
                <div className='dropdowntext'>
                  <Menu.Item href='#'>Featured Items</Menu.Item>
                </div>
                <Menu.Item position='right'>
                  <Input action={{
                    color: 'black',
                    content: 'GO',
                  }} placeholder='enter search keywords here'/>
                </Menu.Item>
              </Grid.Row>
            </Grid>
          </Container>
        </Menu>
    )
  }
}

class PencilBackground extends React.Component {
  render() {
    return (
        <Image href='#' className='pentelainstein'
               src='https://i.imgur.com/PZO5Hce.png'
               alt='background' fluid/>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Container className='boxmenus'>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes' src="https://www.tokyopenshop.com/images/categories/limited.jpg"
                           alt="limited"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Limited Edition</Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes' src="https://www.tokyopenshop.com/images/categories/gel_pens.jpg"
                           alt="gel"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Gel Ink Pens</Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes'
                           src="https://www.tokyopenshop.com/images/categories/custom_multis.jpg"
                           alt="custom"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Custom Multis</Segment>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes'
                           src="https://www.tokyopenshop.com/images/categories/ballpoint_pens.jpg"
                           alt="ballpoint"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Ballpoint Pens</Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes'
                           src="https://www.tokyopenshop.com/images/categories/mechanical_pencils.jpg"
                           alt="mechanical"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Mechanical Pencils</Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes' src="https://www.tokyopenshop.com/images/categories/multi.jpg"
                           alt="multi"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Multi-Function Pens</Segment>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes'
                           src="https://www.tokyopenshop.com/images/categories/fineliners.jpg"
                           alt="fineliners"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Fineliners / Markers</Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes'
                           src="https://www.tokyopenshop.com/images/categories/accoutrements.jpg"
                           alt="accoutrements"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Accoutrements</Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes'
                           src="https://www.tokyopenshop.com/images/categories/fountain_pens.jpg"
                           alt="fountain"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Fountain Pens</Segment>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes' src="https://www.tokyopenshop.com/images/categories/lettering.jpg"
                           alt="brush"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Brush and Lettering Pens</Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes' src="https://www.tokyopenshop.com/images/categories/lead.jpg"
                           alt="lead"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Pencil Lead</Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes'
                           src="https://www.tokyopenshop.com/images/categories/highlighters.jpg"
                           alt="highlighters"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Highlighters</Segment>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes' src="https://www.tokyopenshop.com/images/categories/cards.jpg"
                           alt="cards"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Cards and Letter Sets</Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes' src="https://www.tokyopenshop.com/images/categories/notebooks.jpg"
                           alt="notebooks"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Notebooks</Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes'
                           src="https://www.tokyopenshop.com/images/categories/planner2021.jpg"
                           alt="planner"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>2021 Planners</Segment>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes'
                           src="https://www.tokyopenshop.com/images/categories/travelersnotebook.jpg"
                           alt="travel"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Traveler's Notebook</Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes'
                           src="https://www.tokyopenshop.com/images/categories/watercolor.jpg"
                           alt="watercolor"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Watercolor</Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes' src="https://www.tokyopenshop.com/images/categories/stickers.jpg"
                           alt="stickers"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Stickers</Segment>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes' src="https://www.tokyopenshop.com/images/categories/erasers.jpg"
                           alt="correction"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Correction Products</Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes'
                           src="https://www.tokyopenshop.com/images/categories/whiteboard.jpg"
                           alt="whiteboard"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Whiteboard</Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes' src="https://www.tokyopenshop.com/images/categories/milloo.jpg"
                           alt="milloo"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>milloo Bags</Segment>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes' src="https://www.tokyopenshop.com/images/categories/pen_cases.jpg"
                           alt="cases"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Pen Cases</Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes' src="https://www.tokyopenshop.com/images/categories/tape.jpg"
                           alt="tape"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Japanese tape</Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes' src="https://www.tokyopenshop.com/images/categories/minipens.jpg"
                           alt="slim"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Mini and Slim Pens</Segment>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes' src="https://www.tokyopenshop.com/images/categories/dclips.jpg"
                           alt="clips"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>D-Clips</Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes' src="https://www.tokyopenshop.com/images/categories/manga.jpg"
                           alt="manga"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Manga</Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes'
                           src="https://www.tokyopenshop.com/images/categories/wooden_pencils.jpg"
                           alt="wooden"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Wooden Pencils</Segment>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes'
                           src="https://www.tokyopenshop.com/images/refills/signodxrefills.jpg"
                           alt="refills"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Refills</Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes' src="https://www.tokyopenshop.com/images/categories/frixion.jpg"
                           alt="frixion"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Frixion</Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes' src="https://www.tokyopenshop.com/images/categories/pensets.jpg"
                           alt="sets"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Pen Sets</Segment>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Segment className='boxsegment'>
                  <Segment className='imagesegment'>
                    <Image href='#' className='boxes' src="https://www.tokyopenshop.com/images/categories/gifting.jpg"
                           alt="gifting"/>
                  </Segment>
                  <Segment className='textsegment' textAlign='center'>Gifting</Segment>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Menu borderless className='footermenu'>
          <Grid container columns={3}>
            <Grid.Column>
              <List>
                <div className='footertitle'>SHOP
                </div>
                <List.Item href='#'>
                  <div className="footertext">Home</div>
                </List.Item>
                <List.Item href='#'>
                  <div className="footertext">Featured</div>
                </List.Item>
                <List.Item href='#'>
                  <div className="footertext">Specials</div>
                </List.Item>
                <List.Item href='#'>
                  <div className="footertext">New Arrivals</div>
                </List.Item>
                <List.Item href='#'>
                  <div className="footertext">View All</div>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <div className='footertitle'>CUSTOMER SERVICE
                </div>
                <List.Item href='#'>
                  <div className="footertext">Shipping and Returns</div>
                </List.Item>
                <List.Item href='#'>
                  <div className="footertext">FAQ</div>
                </List.Item>
                <List.Item href='#'>
                  <div className="footertext">Contact Us</div>
                </List.Item>
                <List.Item href='#'>
                  <div className="footertext">About Us</div>
                </List.Item>
                <List.Item href='#'>
                  <div className="footertext">My Account</div>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <div className='footertitle'>SHARE AND CONNECT
              </div>
              <Button className='socialbutton' icon size='huge'>
                <Icon name='facebook icon'/>
              </Button>
              <Button className='socialbutton' icon size='huge'>
                <Icon name='pinterest icon'/>
              </Button>
              <Button className='socialbutton' icon size='huge'>
                <Icon name='youtube icon'/>
              </Button>
              <Button className='socialbutton' icon size='huge'>
                <Icon name='instagram icon'/>
              </Button>
            </Grid.Column>
            <Grid.Row>
              <Grid container columns={2}>
                <Grid.Column textAlign='right'>
                  <div className='copyrighttext'>Copyright © 2020</div>
                </Grid.Column>
                <Grid.Column>
                  <div className='sitenametext'>Tokyo Pen Shop</div>
                </Grid.Column>
              </Grid>
            </Grid.Row>
            <Grid.Row>
              <Grid centered columns={3}>
                <Grid.Column width={4}>
                  <div className='disclaimertext'>Site Map</div>
                </Grid.Column>
                <Grid.Column width={6}>
                  <div className='disclaimertext'>Privacy Notice</div>
                </Grid.Column>
                <Grid.Column width={6}>
                  <div className='disclaimertext'>Conditions of Use</div>
                </Grid.Column>
              </Grid>
            </Grid.Row>
          </Grid>
        </Menu>
    )
  }
}

class ReactPenShop extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <PencilBackground/>
          <MiddleMenu/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<ReactPenShop/>, document.getElementById('root'));