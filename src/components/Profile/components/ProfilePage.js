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
                    <ProfilePageScheduleCell>
                        Godzina
                    </ProfilePageScheduleCell>
                    <ProfilePageScheduleCell>
                        Poniedzialek
                    </ProfilePageScheduleCell>
                </ProfilePageSchedule>
            </ProfilePageWrapper>

        );
    }
}