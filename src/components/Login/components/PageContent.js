// import React, {PureComponent} from 'react';

// import PageContent from '../styled/PageContent';
// import PageMainHeading from '../styled/PageMainHeading';
// import PageSubHeading from '../styled/PageSubHeading';
// import PageHeadingButton from '../styled/PageHeadingButton';

// class PageHeading extends PureComponent {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isVisible: false
//         };

//         this.handleClick = this.handleClick.bind(this);
//     }
//     // handleClick() {
    
//     //     this.setState({
//     //         isVisible: !this.state.isVisible
//     //     });
//     //     console.log(this.state.isVisible)
//     // }

//     render(){
//         return (
//         <PageContent>
//             <PageSubHeading>
//                 Welcome to FitHabit
//             </PageSubHeading>
//             <PageMainHeading>
//                 Sign Up and let's start this great adventure of building healthy habits. On our gym it's gonna be easy and fun!
//             </PageMainHeading>
//             <PageHeadingButton>
//                 Sign Up
//             </PageHeadingButton>
//             <PageHeadingButton onClick={this.handleClick}>
//                 Sign In
//             </PageHeadingButton>
//         </PageContent>
               
//         );
//     }
// }

// export default PageHeading;