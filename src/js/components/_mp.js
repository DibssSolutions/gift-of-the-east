const EasyGoogleMaps = require('easygooglemaps');
import { LOAD_DATA, buildIcon } from './../utils';
import { ACTIVE, OPEN } from './../constants';
const mapNode = $('.js-shops-map');
if (mapNode.length) {
  mapNode.each((i, container) => {
    let path = $(container).data('json');
    let data;
    LOAD_DATA({
      path: path,
      callback: data => {
        let mapOptions = {
          map: {
            APIKEY: '&amp;',
            container: '.js-shops-map',
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
                  featureType: 'administrative',
                  elementType: 'all',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'landscape',
                  elementType: 'all',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'landscape.man_made',
                  elementType: 'all',
                  stylers: [
                    {
                      visibility: 'on'
                    }
                  ]
                },
                {
                  featureType: 'poi',
                  elementType: 'all',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'poi.attraction',
                  elementType: 'all',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'poi.attraction',
                  elementType: 'labels.icon',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'poi.business',
                  elementType: 'all',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'poi.government',
                  elementType: 'all',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'poi.medical',
                  elementType: 'all',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'all',
                  stylers: [
                    {
                      visibility: 'on'
                    }
                  ]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'geometry',
                  stylers: [
                    {
                      visibility: 'on'
                    }
                  ]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'labels',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'labels.text',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'labels.icon',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'poi.place_of_worship',
                  elementType: 'all',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'poi.school',
                  elementType: 'all',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'poi.school',
                  elementType: 'geometry',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'poi.school',
                  elementType: 'geometry.fill',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'poi.school',
                  elementType: 'geometry.stroke',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'poi.school',
                  elementType: 'labels',
                  stylers: [
                    {
                      visibility: 'off'
                    },
                    {
                      gamma: '0.80'
                    }
                  ]
                },
                {
                  featureType: 'poi.school',
                  elementType: 'labels.text',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'poi.school',
                  elementType: 'labels.text.fill',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'poi.school',
                  elementType: 'labels.icon',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'poi.sports_complex',
                  elementType: 'all',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'road',
                  elementType: 'all',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'all',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'road.arterial',
                  elementType: 'all',
                  stylers: [
                    {
                      visibility: 'simplified'
                    },
                    {
                      gamma: '2.00'
                    }
                  ]
                },
                {
                  featureType: 'road.local',
                  elementType: 'all',
                  stylers: [
                    {
                      visibility: 'simplified'
                    },
                    {
                      gamma: '2.00'
                    }
                  ]
                },
                {
                  featureType: 'transit',
                  elementType: 'all',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'water',
                  elementType: 'all',
                  stylers: [
                    {
                      visibility: 'on'
                    }
                  ]
                }
              ]
            }
          },
          infobox: {
            template: '#infobox',
            onlyOneBox: true,
            style: {
              width: '300px'
            },
            position: {
              x: 'left',
              y: 'center'
            },
            closeButton: '.js-infobox-close'
          },
          markers: {
            items: data
          }
        };
        let map = new EasyGoogleMaps(mapOptions);
        map.init();

        map.onload(function() {
          const shop = $('.js-shop');
          const shops = $('.js-shops');

          setTimeout(() => {
            map._markers.forEach(marker => {
              marker.addListener('click', function(e) {
                console.log(marker.id);
                const targetShop = $(shops).find(`[data-id=${marker.id}]`);
                toggleShopsOnClick($(targetShop));
                // $(targetShop).addClass(ACTIVE);
              });
            });
          }, 100);

          $(shop).each((index, el) => {
            const shop = $(el);
            const data = $(shop).data();
            const myLatlng = { lat: data.lat, lng: data.lng };
            const id = data.id;
            const gMap = map.realmap;
            var newCenter = new google.maps.LatLng(myLatlng);

            $(shop).on('click', function(e) {
              if ($(e.target).hasClass('js-photo-gallery-trigger')) return;
              // === SHOPS-LIST ===
              toggleShopsOnClick($(this));

              // === MAP ===
              for (let k = 0; k < map._markers.length; k++) {
                map._markers[k].icon.url = 'img/marker.svg';
                if (map._markers[k].id === `${id}`) {
                  map._markers[k].icon.url = 'img/active-marker.svg';
                }
              }
              gMap.panTo(newCenter);
            });
          });
        });
      }
    });
  });
}

function toggleShopsOnClick(el) {
  $(el)
    .parents('.js-shops')
    .addClass(OPEN);
  $('.js-shop').each((i, el) => $(el).removeClass(ACTIVE));
  $(el).addClass(ACTIVE);
}
