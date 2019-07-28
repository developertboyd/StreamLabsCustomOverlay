angular.module('app').factory('eventFactory', function ($rootScope, STREAM_LABS_CONSTANTS) {
    var eventFactory = {};
    const streamlabs = io(`https://sockets.streamlabs.com?token=${STREAM_LABS_CONSTANTS.SOCKET_TOKEN}`, {transports: ['websocket']});

    //Perform Action on event
    streamlabs.on('event', (eventData) => {
        console.log(eventData);

        switch (eventData.type) {
            case 'donation':
                //code to handle donation events
                var donation = eventData;
                $rootScope.$broadcast('donation', donation);
                break;
            case 'follow':
                //code to handle follow events
                console.log(eventData.message);
                $rootScope.$broadcast('follow');
                break;
            case 'subscription':
                //code to handle subscription events
                console.log(eventData.message);
                $rootScope.$broadcast('sub');
                break;
            case 'host':
                //code to handle host events
                console.log(eventData.message);
                $rootScope.$broadcast('host');
                break;
            case 'bits':
                //code to handle bits events
                console.log(eventData.message);
                $rootScope.$broadcast('bits');
                break;
            default:
                //default case
                console.log(eventData.message);
                $rootScope.$broadcast('event');
        }
    });

    return eventFactory;
});
