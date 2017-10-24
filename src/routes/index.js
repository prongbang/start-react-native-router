import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {NativeRouter, Route, Link, Switch, Redirect} from 'react-router-native'

import Home from '../containers/home'
import Member from '../containers/member'
import MemberEdit from '../containers/member/edit'
import NotFound from '../components/not-found'

const Routes = (props) => (
    <NativeRouter>
        <View style={styles.container}>
            <View style={styles.nav}>
                <Link to="/" underlayColor='#f0f4f7' style={styles.navItem}>
                    <Text>Home</Text>
                </Link>
                <Link to="/member" underlayColor='#f0f4f7' style={styles.navItem}>
                    <Text>Member</Text>
                </Link>
            </View>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/member" component={Member}/>
                <Route path="/member:id" component={MemberEdit}/>
                <Route component={NotFound}/>
            </Switch>
        </View>
    </NativeRouter>
)

export default Routes

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10
    },
    header: {
        fontSize: 20
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    subNavItem: {
        padding: 5
    },
    topic: {
        textAlign: 'center',
        fontSize: 15
    }
})