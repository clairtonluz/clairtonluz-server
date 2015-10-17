/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Post = require('../api/post/post.model');

Post.find({}).remove(function () {
    Post.create({
            title: 'Atom - Designed for Mobile Apps',
            summary: 'You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.',
            image: 'img/projects/project-5.png',
            content: '<p>You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.</p>'
        }, {
            title: 'KickStarter - Velocity',
            summary: 'A responsive Bootstrap template designed for digital products.',
            image: 'img/projects/project-featured.png',
            content: '<p>You can promote your main project here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. At vero eos et accusamus et iusto odio dignissimos ducimus.</p>'
        }, {
            title: 'Atom - Designed for Mobile Apps3',
            summary: 'You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.',
            image: 'img/projects/project-5.png',
            content: '<p>You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.</p>'
        }, {
            title: 'Atom - Designed for Mobile Apps4',
            summary: 'You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.',
            image: 'img/projects/project-5.png',
            content: '<p>You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.</p>'
        }
    );
});