import classes from './Home.module.css';
import React, { Component } from 'react';
import { FullPage, Slide } from 'react-full-page';
import First from '../../components/HomeImg/First';
import HomeItems from '../../components/HomeItems/HomeItems';

class Home extends Component {
    state = {
        sections: [
            {
                id: 1,
                title: 'Astro',
                subtitle: 'Photography of the stars',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-40f3a.appspot.com/o/First.jpg?alt=media&token=8923bc3f-a8d7-4f84-b11d-f55a259b5eb3',
                revield: false
            },
            {
                id: 2,
                title: 'Travel',
                subtitle: 'Outdoor photoshoots',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-40f3a.appspot.com/o/Second.jpg?alt=media&token=d178e333-4b9d-4069-924d-022c64d6c97c',
                reveild: false
            }
        ]
    }

    handleScroll = (index, action) => {
		this.setState((state) => {
			const list = state.sections.map((item, i) => {
				if (index === i) {
					if (action === 'enter') {
						return (item.revield = true);
					} else if (action === 'leave') {
						return (item.revield = false);
					}
				}
				return item;
			});
			return {
				list
			};
		});
	};


    render() { 
        return (
            <FullPage className={classes.Fullpage}>
                <Slide>
                    <First />
                </Slide>
                {this.state.sections.map((item, index) => (
                    <Slide key={item.id}>
                        <HomeItems item={item} handleScroll={this.handleScroll} reviel={this.state.sections} index={index} />
                    </Slide>
                ))}
            </FullPage>
        );
    }
}
 
export default Home;