import React, { PureComponent } from 'react';

import ProfilePageHeader from '../styled/ProfilePageHeader';
import ProfilePageWrapper from '../styled/ProfilePageWrapper';
import ProfileSliderDate from '../styled/ProfileSliderDate';
import ProfileArrow from '../styled/ProfileArrow';
import ProfileWeekDate from '../styled/ProfileWeekDate';
import ProfilePageSchedule from '../styled/ProfilePageSchedule';
import ProfilePageScheduleCell from '../styled/ProfilePageScheduleCell';

export class ProfilePage extends PureComponent {

    render() {

        return (
            <ProfilePageWrapper>
               <ProfilePageHeader>
                    <h1>Workout Schedule</h1>
                </ProfilePageHeader>
                <ProfileSliderDate>
                    <ProfileArrow>
                        &#8249;
                    </ProfileArrow>
                    <ProfileWeekDate>
                        1-10-2018 - 7-10-2018
                    </ProfileWeekDate>
                    <ProfileArrow>
                        &#8250;
                    </ProfileArrow>
                </ProfileSliderDate>
                <ProfilePageSchedule>
                    <ProfilePageScheduleCell>Start Time</ProfilePageScheduleCell>
                    <ProfilePageScheduleCell>Monday</ProfilePageScheduleCell>    
                    <ProfilePageScheduleCell>Tuesday</ProfilePageScheduleCell>    
                    <ProfilePageScheduleCell>Wednesday</ProfilePageScheduleCell>    
                    <ProfilePageScheduleCell>Thursday</ProfilePageScheduleCell>    
                    <ProfilePageScheduleCell>Friday</ProfilePageScheduleCell>    
                    <ProfilePageScheduleCell>Saturday</ProfilePageScheduleCell>    
                    <ProfilePageScheduleCell>Sunday</ProfilePageScheduleCell>    
                    <ProfilePageScheduleCell>17.00</ProfilePageScheduleCell>    
                    <ProfilePageScheduleCell>...</ProfilePageScheduleCell>    
                    <ProfilePageScheduleCell>...</ProfilePageScheduleCell>    
                    <ProfilePageScheduleCell>...</ProfilePageScheduleCell>    
                    <ProfilePageScheduleCell>...</ProfilePageScheduleCell>    
                    <ProfilePageScheduleCell>...</ProfilePageScheduleCell>    
                    <ProfilePageScheduleCell>...</ProfilePageScheduleCell>    
                    <ProfilePageScheduleCell>...</ProfilePageScheduleCell>    
                    <ProfilePageScheduleCell>19.00</ProfilePageScheduleCell>    
                    <ProfilePageScheduleCell>...</ProfilePageScheduleCell>    
                    <ProfilePageScheduleCell>...</ProfilePageScheduleCell>    
                    <ProfilePageScheduleCell>...</ProfilePageScheduleCell>    
                    <ProfilePageScheduleCell>...</ProfilePageScheduleCell>    
                    <ProfilePageScheduleCell>...</ProfilePageScheduleCell>    
                    <ProfilePageScheduleCell>...</ProfilePageScheduleCell>    
                    <ProfilePageScheduleCell>...</ProfilePageScheduleCell>    
                </ProfilePageSchedule>
            </ProfilePageWrapper>

        );
    }
}