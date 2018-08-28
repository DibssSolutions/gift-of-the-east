const EasyGoogleMaps = require('easygooglemaps');
import { LOAD_DATA, buildIcon } from './../utils';
const mapNode = $('.js-map');
if (mapNode.length) {
  mapNode.each((i,container) => {
    let path = $(container).data('json');
    let data;
    LOAD_DATA({
      path: path,
      callback: data => { 
        let mapOptions = {
          map: {
            APIKEY: 'AIzaSyDMWIxCN9ijYRfiH7bmQN-LNRDtoboLZqY',
            container: '.js-map',
            options: {
              center: {
                lat: $(container).data('center-lat'),
                lng: $(container).data('center-lng')
              },
              zoom: 14,
              zoomControl: false,
              mapTypeControl: false,
              scaleControl: false,
              streetViewControl: false,
              rotateControl: false,
              fullscreenControl: false,
              styles: [
                {
                  'featureType': 'administrative',
                  'elementType': 'all',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'landscape',
                  'elementType': 'all',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'landscape.man_made',
                  'elementType': 'all',
                  'stylers': [
                    {
                      'visibility': 'on'
                    }
                  ]
                },
                {
                  'featureType': 'poi',
                  'elementType': 'all',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'poi.attraction',
                  'elementType': 'all',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'poi.attraction',
                  'elementType': 'labels.icon',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'poi.business',
                  'elementType': 'all',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'poi.government',
                  'elementType': 'all',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'poi.medical',
                  'elementType': 'all',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'poi.park',
                  'elementType': 'all',
                  'stylers': [
                    {
                      'visibility': 'on'
                    }
                  ]
                },
                {
                  'featureType': 'poi.park',
                  'elementType': 'geometry',
                  'stylers': [
                    {
                      'visibility': 'on'
                    }
                  ]
                },
                {
                  'featureType': 'poi.park',
                  'elementType': 'labels',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'poi.park',
                  'elementType': 'labels.text',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'poi.park',
                  'elementType': 'labels.icon',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'poi.place_of_worship',
                  'elementType': 'all',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'poi.school',
                  'elementType': 'all',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'poi.school',
                  'elementType': 'geometry',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'poi.school',
                  'elementType': 'geometry.fill',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'poi.school',
                  'elementType': 'geometry.stroke',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'poi.school',
                  'elementType': 'labels',
                  'stylers': [
                    {
                      'visibility': 'off'
                    },
                    {
                      'gamma': '0.80'
                    }
                  ]
                },
                {
                  'featureType': 'poi.school',
                  'elementType': 'labels.text',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'poi.school',
                  'elementType': 'labels.text.fill',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'poi.school',
                  'elementType': 'labels.icon',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'poi.sports_complex',
                  'elementType': 'all',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'road',
                  'elementType': 'all',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'road.highway',
                  'elementType': 'all',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'road.arterial',
                  'elementType': 'all',
                  'stylers': [
                    {
                      'visibility': 'simplified'
                    },
                    {
                      'gamma': '2.00'
                    }
                  ]
                },
                {
                  'featureType': 'road.local',
                  'elementType': 'all',
                  'stylers': [
                    {
                      'visibility': 'simplified'
                    },
                    {
                      'gamma': '2.00'
                    }
                  ]
                },
                {
                  'featureType': 'transit',
                  'elementType': 'all',
                  'stylers': [
                    {
                      'visibility': 'off'
                    }
                  ]
                },
                {
                  'featureType': 'water',
                  'elementType': 'all',
                  'stylers': [
                    {
                      'visibility': 'on'
                    }
                  ]
                }
              ]
            }
          },
          infobox: {
            template: null
          },
          markers: {
            items: data
          }
        };
        let map = new EasyGoogleMaps(mapOptions);
        map.init();
      }
    });

    
  });
}
