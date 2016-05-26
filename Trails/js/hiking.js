//State Parks
function initMap() {

    var locations = [
        //Hiking Trails
        ['<strong>Arrowhead State Trail</strong><br/>' +
         'Tower to International Falls<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         48.1635129, -92.8009661, 1],
        ['<strong>Blazing Star State Trail</strong><br/>' +
         'Albert Lea to Myre-Big Island State Park<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         43.6424395, -93.3247082, 1],
        ['<strong>Brown&#39;s Creek State Trail</strong><br/>' +
         'Grant to Stillwater<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         45.0716605, -92.8545651, 1],
        ['<strong>Casey Jones State Trail</strong><br/>' +
         'Pipestone to Murray County<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         43.9972255, -96.2089116, 1],
        ['<strong>Central Lakes State Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         46.0197834, -95.7020953, 1],
        ['<strong>C.J. Ramstad/North Short State Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         47.0262774, -91.9064981, 1],
        ['<strong>Cuyuna Lakes State Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         46.4898118, -94.0028644, 1],
        ['<strong>Douglas State Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.1274241, -92.5908243, 1],
        ['<strong>Gateway State Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         45.0341478, -92.9506245, 1],
        ['<strong>Gitchi-Gami State Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         47.5690212, -90.8494231, 1],
        ['<strong>Glacial Lakes State Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         45.2699351, -94.9455799, 1],
        ['<strong>Great Rivers Bluff State Park</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         43.9395908, -91.4105595, 1],
        ['<strong>Heartland State Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         47.1521767, -94.6424342, 1],
        ['<strong>Luce Line Regional Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.9890271, -93.4880774, 1],
        ['<strong>Matthew Lourey State Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         45.9462852, -92.6082205, 1],
        ['<strong>Minnesota Valley State Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.664043, -93.7101632, 1],
        ['<strong>Paul Bunyan State Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         46.6955137, -94.374225, 1],
        ['<strong>Root River State Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         43.7677384, -91.876117, 1],
        ['<strong>Sakatah Singing Hills State Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.2026765, -93.6280076, 1],
        ['<strong>Shooting Star State Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         43.5829572, -92.7865004, 1],
        ['<strong>Taconite State Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         47.3299541, -93.4189313, 1],
        ['<strong>Willard Munger State Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         46.4513926, -92.7702443, 1],
        ['<strong>Interstate State Park</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         45.3936727, -92.6709847, 1],
        ['<strong>Rydell Refuge Trails</strong><br/>' +
         '17788 349th St SE<br/>' +
         'Erskine, MN 56535<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         47.6587507, -96.0933512, 1],
        ['<strong>Lake Wobegon Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         45.6696464, -94.7371927, 1],
        ['<strong>Cottage Grove Ravine Regional Park</strong><br/>' +
         '9940 Point Douglas Road<br/>' +
         'Cottage Grove, MN 55016<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.8114968, -92.9023099, 1],
        ['<strong>Superior Hiking</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         47.7752841, -90.3811835, 1],
        ['<strong>Lebanon Hills Regional Park</strong><br/>' +
         '12100 Johnny Cake Ridge Rd<br/>' +
         'St Paul, MN 55124<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.7737438, -93.1829773, 1],
        ['<strong>Elm Creek Park Reserve</strong><br/>' +
         '12400 James Deane Pkwy<br/>' +
         'Maple Grove, MN 55369<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         45.1362845, -93.4447824, 1],
        ['<strong>Minnehaha Regional Park</strong><br/>' +
         '4801 S Minnehaha Park Dr<br/>' +
         'Minneapolis, MN 55417<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.9150624, -93.210469, 1],
        ['<strong>Carlos Avery Trail</strong><br/>' +
         '5463 West Broadway<br/>' +
         'Forest Lake, MN 55025<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         45.3433838, -93.0502567, 1],
        ['<strong>Suomi Hills Trail</strong><br/>' +
         'Deer River<br/>' +
         'Township, MN 56636<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         47.4546659, -93.6407278, 1],
        ['<strong>Dakota Rail Regional Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.9067491, -93.7388031, 1],
        ['<strong>Bally Creek Trails</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         47.7825153, -90.5252795, 1],
        ['<strong>Sunrise Prairie Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         45.4052388, -92.9885996, 1],
        ['<strong>Big Rivers Regional Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.8882025, -93.1605312, 1],
        ['<strong>South St. Paul Riverfront Trail</strong><br/>' +
         'South St Paul, MN 55075<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.9133372, -93.051671, 1],
        ['<strong>Cottage Grove Ravine Regional Park</strong><br/>' +
         '9940 Point Douglas Road<br/>' +
         'Cottage Grove, MN 55016<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.8114968, -92.9023099, 1],
        ['<strong>Minnehaha Falls</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.9153298, -93.2197554, 1],
        ['<strong>Mississippi Gorge Trail</strong><br/>' +
         '5114 Mississippi River Blvd S<br/>' +
         'Minneapolis, MN 55430<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.9371211, -93.2058922, 1],
        ['<strong>Bass Ponds Trail, Long Meadow Lake</strong><br/>' +
         '3815 American Blvd E<br/>' +
         'Bloomington, MN 55425<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.8598186, -93.2183667, 1],
        ['<strong>Lost Forty Trail</strong><br/>' +
         'Blackduck, MN 56630<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         47.5750863, -94.6321118, 1],
        ['<strong>Rush Creek Regional Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         45.141398, -93.3630926, 1],
        ['<strong>Shingle Creek Regional Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         45.1096251, -93.3308251, 1],
        ['<strong>Hyland Lake Park Reserve</strong><br/>' +
         '10145 Bush Lake Rd<br/>' +
         'Bloomington, MN 55438<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.8248275, -93.3739011, 1],
        ['<strong>Murphy-Hanrehan Park Reserve</strong><br/>' +
         '15501 Murphy Lake Blvd<br/>' +
         'Savage, MN 55378<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.7128758, -93.347354, 1],
        ['<strong>Magnetic Rock Trail</strong><br/>' +
         'Co Rd 12<br/>' +
         'Grand Marais, MN 55604<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         48.099223, -90.8025497, 1],
        ['<strong>Bluffside Trail</strong><br/>' +
         '207 Lafayette St<br/>' +
         'Winona, MN 55987<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.0399129, -91.6697555, 1],
        ['<strong>Barn Bluff Trail</strong><br/>' +
         'Red Wing, MN 55066<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.5679867, -92.5214146, 1],
        ['<strong>Theodore Wirth Regional Park</strong><br/>' +
         '1339 Theodore Wirth Pkwy<br/>' +
         'Minneapolis, MN 55411<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.9865209, -93.3261863, 1],
        ['<strong>Maplelag Trail</strong><br/>' +
         '30501 Maplelag Rd<br/>' +
         'Callaway, MN 56521<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         47.011014, -95.7790887, 1],
        ['<strong>Cannon Valley Trail</strong><br/>' +
         '825 Cannon River Ave<br/>' +
         'Cannon Falls, MN 55009<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.515744, -92.8928617, 1],
        ['<strong>Voyageurs National Park</strong><br/>' +
         '360 Minnesota 11<br/>' +
         'International Falls, MN 56649<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         48.5844444, -93.1638554, 1],
        ['<strong>Lake Elmo Park Reserve</strong><br/>' +
         '1515 Keats Ave N<br/>' +
         'Lake Elmo, MN 55042<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.9707263, -92.9053433, 1],
        ['<strong>Hay Creek Trails</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.5456907, -92.542312, 1],
        ['<strong>Border Route Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         48.0221229, -89.9931322, 1],
        ['<strong>Big Aspen Trail</strong><br/>' +
         '7598 Pelton Rd<br/>' +
         'Britt, MN 55710<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         47.6693203, -92.5776297, 1],
        ['<strong>Detroit Mountain Recreation Area</strong><br/>' +
         '29409 170th St<br/>' +
         'Detroit Lakes, MN 56501<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         46.8181774, -95.7926889, 1],
        ['<strong>Goose Lake Trail</strong><br/>' +
         '200 Ash Ave<br/>' +
         'Cass Lake, MN 56633<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         47.3793999, -94.6214726, 1],
        ['<strong>Louisville Swamp, Mazomani Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.7323511, -93.6201311, 1],
        ['<strong>Bassett Creek Regional Trail</strong><br/>' +
         '6001 32nd Avenue N<br/>' +
         'Crystal, MN 55422<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         45.0116985, -93.4125278, 1],
        ['<strong>Cedar Lake LRT Regional Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.9448719, -93.3384343, 1],
        ['<strong>Crystal Lake Regional Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         45.0079549, -93.4130332, 1],
        ['<strong>Lake Independence Regional Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         45.0873732, -93.6376428, 1],
        ['<strong>Lake Minnetonka LRT Regional Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.9313329, -93.4937377, 1],
        ['<strong>Medicine Lake Regional Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         45.0627543, -93.4397419, 1],
        ['<strong>Minnesota Rivers Bluffs LRT Regional Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.8607391, -93.4788134, 1],
        ['<strong>Nine Mile Creek Regional Trail</strong><br/>' +
         '2301 Village Ln<br/>' +
         'Minneapolis, MN 55431<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.8177367, -93.3111989, 1],
        ['<strong>North Cedar Lake Regional Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         44.9448719, -93.3384343, 1],
        ['<strong>Northeast Diagonal Regional Trail</strong><br/>' +
         '3000 Xenium Ln N<br/>' +
         'Plymouth, MN 55441<br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         45.0133972, -93.4529169, 1],
        ['<strong>Rice Creek North Regional Trail</strong><br/>' +
         '<a href="^_^" target="_blank">Visit Website</a><br/>' +
         '<a href="^_^" target="_blank">Get Directions</a>', +
         45.1015397, -93.1857371, 1]

/*      ['Mississippi National River and Recreation Area Water Trail<br/>120 W Kellogg Blvd, St Paul, MN 55102<br/>', 44.942534, -93.1010077, 1],
      ['Verchota Canoe Trail<br/>N5727 County Road Z, Onalaska, WI 54650', 43.9270372, 91.2831473, 1],
      ['Grand Forks / East Grand Forks Greenway Trail<br/>Greenway Blvd SE, East Grand Forks, MN 56721', 47.9043802, -97.0028892, 1],
      ['Cut Foot Sioux NRT<br/>44623 MN-46, Deer River Township, MN 56636', 47.5193944, -94.0446687, 1],
      ['North Fork Crow River Trail', 45.1578189, -93.8466802, 1],
      ['Oakdale Park<br/>4444 Hadley Ave N, Oakdale, MN 55128', 44.9978738, -93.0582949, 1],
      ['Ritter Farm Park<br/>19300 Ritter Pkwy Trail, Lakeville, MN 55044', 44.6740098, -93.3083495, 1],
      ['Shingobee NRT<br/>669 N Medina St, Loretto, MN 55357', 45.0563698, -93.6368106, 1],
      ['Swede Hollow Park<br/>615 7th St E, St Paul, MN 55106', 44.9599657, -93.0782826, 1],
      ['Fort Snelling State Park<br/>101 Snelling Lake Road, St Paul, MN 55111', 44.8735388, -93.1935399, 1],
      ['Minnesota Valley State Recreation Area<br/>19825 Park Blvd, Jordan, MN 55352', 44.664043, -93.7101632, 1],
      ['Giants Ridge<br/>6325 Wynne Creek Dr, Biwabik, MN 55708', 47.578183, -92.3060557, 1],
      ['The Duluth Experience Tour Company<br/>211 E 2nd St, Duluth, MN 55805', 46.7907376, -92.0998528, 1],
      ['Rice Lake National Wildlife Refuge', 46.5321666, -93.4279476, 1],
      ['Mill Ruins Park<br/>102 Portland Ave S, Minneapolis, MN 55401', 44.9801953, -93.2600018, 1],
      ['Casey Jones State Trail', 43.9972255, -96.2089116, 1],
      ['Lake Carlos State Park<br/>2601 County Rd 38 NE, Carlos, MN 56319', 46.0001469, -95.3504813, 1],
      ['Grand Portage National Monument<br/>Grand Portage, MN 55605', 47.9606509, -89.6887828, 1],
      ['Kilen Woods State Park<br/>50200 860th St, Lakefield, MN 56150', 43.7308808, -95.0701119, 1],
      ['Lake Bronson State Park<br/>County Rd 28, Lake Bronson, MN 56734', 48.7243623, -96.6276054, 1],
      ['Tamarac National Wildlife Refuge<br/>35704 270 St, Rochert, MN 56578', 47.0109926, -95.8469396, 1],
      ['Big Stone Lake State Park<br/>35889 Meadowbrook State, St Park Rd, Ortonville, MN 56278', 45.38697, -96.5362074, 1],
      ['Glacial Lakes State Trail', 45.2699351, -94.9455799, 1],
      ['Gitchi-Gami State Trail', 47.5690212, -90.8494231, 1],
      ['Chester Woods County Park<br/>8378 14 Highway Southeast, Eyota, MN 55934', 43.989302, -92.3218859, 1],
      ['Boundary Country Trekking & Outfitter<br/>11 Poplar Creek Dr, Grand Marais, MN 55604', 48.0371614, -90.4736458, 1],
      ['McCarthy Beach State Park<br/>7622 McCarthy Beach Rd, Side Lake, MN 55781', 47.6744511, -93.0294937, 1],
      ['Sakatah Singing Hills State Trail', 44.2026765, -93.6280076, 1],
      ['Birch Coulee Battlefield<br/>Co Hwy 2, Morton, MN 56270', 44.577711, -94.9822457, 1],
      ['Boulder Lake Management Area<br/>7328 Boulder Dam Rd, Duluth, MN 55803', 47.0401432, -92.1919735, 1],
      ['Father Hennepin State Park<br/>41296 Father Hennepin Park Rd, Isle, MN 56342', 46.1437608, -93.4848517, 1],
      ['River Bend Nature Center<br/>1000 Rustad Road, Faribault, MN 55021', 44.277616, -93.2434557, 1],
      ['Douglas State Trail', 44.1274241, -92.5908243, 1],
      ['Cascade Lodge<br/>3719 MN-61, Lutsen, MN 55612', 47.7059138, -90.5328482, 1],
      ['Arrowhead State Trail', 48.1635129, -92.8009661, 1],
      ['Root River State Trail', 43.7677384, -91.876117, 1],
      ['Minnesota Valley State Trail<br/>19825 Park Blvd, Jordan, MN 55352', 44.664043, -93.7101632, 1],
      ['Fort Ridgely State Park<br/>72158 Co Rd 30, Fairfax, MN 55332', 44.4482, -94.7287334, 1],
      ['Charles A Lindbergh State Park<br/>1615 Lindbergh Dr S, Little Falls, MN 56345', 45.9591359, -94.3911243, 1],
      ['Wolf Ridge Environmental Learning Center<br/>6282 Cranberry Rd, Finland, MN 55603', 47.3817159, -91.1983252, 1],
      ['Chippewa National Forest<br/>200 Ash Ave, Cass Lake, MN 56633', 47.3793999, -94.6214726, 1],
      ['Forestville/Mystery Cave State Park<br/>21071 Co Hwy 118, Preston, MN 55965', 43.6337131, -92.238056, 1],
      ['Audubon Center of the North Woods<br/>54165 Audubon Rd, Sandstone, MN 55072', 46.114977, -92.9952227, 1],
      ['Flandrau State Park<br/>1300 Summit Ave, New Ulm, MN 56073', 44.2937451, -94.4676064, 1],
      ['Crow Wing State Park<br/>3124 State Park Rd, Brainerd, MN 56401', 0, 0, 1],
      ['Alexander Ramsey Park<br/>99 E Oak St, Redwood Falls, MN 56283', 44.550662, -95.1273747, 1],
      ['Sucker Creek Preserve<br/>1339 Burroughs Rd, Detroit Lakes, MN 56501', 46.7757904, -95.8013988, 1],
      ['Glendalough State Park<br/>25287 Whitetail Ln, Battle Lake, MN 56515', 46.3141269, -95.6814066, 1],
      ['Baker Park Reserve<br/>2309 Baker Park Rd, Maple Plain, MN 55359', 45.0226281, -93.6390281, 1],
      ['Minnesota Valley National Wildlife Refuge<br/>3815 American Blvd E, Bloomington, MN 55425', 44.8598186, -93.2183667, 1],
      ['Monson Lake State Park<br/>1690 15th St NE, Sunburg, MN 56289', 45.3184438, -95.2779645, 1],
      ['Rice Lake State Park<br/>Rose St, Owatonna, MN 55060', 44.0928063, -93.0661475, 1],
      ['Banning State Park<br/>61101 Banning Park Rd, Sandstone, MN 55072', 46.1734236, -92.8518965, 1],
      ['Mille Lacs Kathio State Park<br/>15066 Kathio State Park Rd, Onamia, MN 56359', 46.1353641, -93.7280249, 1],
      ['Agassiz National Wildlife Refuge<br/>Middle River, MN 56737', 48.299759, -95.9846586, 1],
      ['Cascade River State Park<br/>West, 3481 MN-61, Lutsen, MN 55612', 47.7110425, -90.5127418, 1],
      ['Itasca State Park<br/>36750 Main Park Drive, Park Rapids, MN 56470', 47.1950765, -95.1669994, 1],
      ['Savanna Portage State Park<br/>55626 Lake Pl, McGregor, MN 55760', 46.8499483, -93.1508779, 1],
      ['Park Point Recreation Area<br/>411 W First St, Duluth, MN 55802', 46.7094877, -92.0243056, 1],
      ['Jay Cooke State Park<br/>780 MN-210, Carlton, MN 55718', 46.6552834, -92.3750003, 1],
      ['Schoolcraft State Park<br/>9042 Schoolcraft Ln NE, Deer River, MN 56636', 47.2230894, -93.8071303, 1],
      ['Glacial Lakes State Park<br/>25022 Co Rd 41, Starbuck, MN 56381', 45.5412741, -95.5334579, 1],
      ['Northern Tallgrass Prairie NWR', 44.4517172, -96.1088003, 1],
      ['Minnesota Valley State Recreation Area<br/>19825 Park Blvd, Jordan, MN 55352', 44.664043, -93.7101632, 1],
      ['French Regional Park<br/>12605 Rockford Rd, Plymouth, MN 55441', 45.0245816, -93.43843, 1],
      ['Eagle Bluff Environmental Learning Center<br/>28097 Goodview Dr, Lanesboro, MN 55949', 43.7610698, -92.0035565, 1],
      ['Lutsen Mountains Ski & Summer Resort<br/>467 Ski Hill Rd, Lutsen, MN 55612', 47.6497896, -90.7288562, 1],
      ['Heartland State Trail', 47.1521767, -94.6424342, 1],
      ['Moose Lake State Park<br/>4252 Co Rd 137, Moose Lake, MN 55767', 46.4358669, -92.7381745, 1],
      ['Lake Maria State Park<br/>11411 Clementa Ave NW, Monticello, MN 55362', 45.317909, -93.9380606, 1],
      ['Kanabec History Center<br/>805 Forest Ave W, Mora, MN 55051', 45.8742604, -93.3099505, 1],
      ['Enger Park Tower and Gardens<br/>1801 W Skyline Pkwy, Duluth, MN 55806', 46.7793723, -92.1333894, 1],
      ['Matthew Lourey State Trail<br/>30065 St Croix Park Rd, Hinckley, MN 55037', 45.9462852, -92.6082205, 1],
      ['Camden State Park<br/>1897 Camden Park Rd, Lynd, MN 56157', 44.3561567, -95.9219668, 1],
      ['Leif Erickson Park & Rose Garden<br/>12th Ave E & London Road, Duluth, MN 55802', 46.7970188, -92.0842661, 1],
      ['Minneopa State Park<br/>54497 Gadwall Rd, Mankato, MN 56001', 44.1485924, -94.0954533, 1],
      ['Terrace Oaks West Park<br/>Burnsville, MN 55337', 44.7744386, -93.2407531, 1],
      ['Northland Arboretum<br/>14250 Conservation Dr, Baxter, MN 56425', 46.3594645, -94.2301399, 1],
      ['Paul Bunyan State Trail', 46.6955137, -94.374225, 1],
      ['Split Rock Lighthouse State Park<br/>3755 Split Rock Lighthouse Road, Two Harbors, MN 55616', 47.2008967, -91.3693031, 1],
      ['Maplewood State Park<br/>39721 Park Entrance Rd, Pelican Rapids, MN 56572', 46.5388907, -95.9552331, 1],
      ['Lake Bemidji State Park<br/> 3401 State Park Rd NE, Bemidji, MN 56601', 47.5355317, -94.8300612, 1],
      ['Suomi Hills Ski Trail<br/>Deer River Township, MN 56636', 47.4546659, -93.6407278, 1],
      ['Three Rivers Park District<br/>3000 Xenium Ln N, Plymouth, MN 55441', 45.0133972, -93.4529169, 1],
      ['Carley State Park<br/>Plainview, MN 55964', 44.1169556, -92.1779165, 1],
      ['Prairie Wetlands Learning Center<br/>602 MN-210, Fergus Falls, MN 56537', 46.2652882, -96.0658238, 1],
      ['Boundary Waters Canoe Area Wilderness<br/>Duluth, MN 55808', 48.0338889, -90.9949665, 1],


      ['Lake Byllesby Regional Park<br/>Cannon Falls, MN', 44.5083555, -92.943818, 1],
      ['Miesville Ravine Park Reserve<br/>27970 Orlando Trail, Cannon Falls, MN 55009', 44.5431188, -92.8050487, 1],
      ['Mississippi River Regional Trail', 45.0714867, -93.2791876, 1],
      ['Spring Lake Park Reserve<br/>10145 Bush Lake Rd, Bloomington, MN 55438', 44.9840038, -93.2585533, 1],
      ['Thompson County Park<br/>360 Butler Avenue East, West St Paul, MN 55118', 44.9034576, -93.0851985, 1],
      ['Whitetail Woods Regional Park<br/>17100 158th St W, Farmington, MN 55024', 44.6848692, -93.0873615, 1],
      ['Hyland Lake Park Reserve<br/> 10145 Bush Lake Rd, Bloomington, MN 55438', 44.8248275, -93.3739011, 1],
      ['Elm Creek Park Reserve<br/>12400 James Deane Pkwy, Maple Grove, MN 55369', 45.1362845, -93.4447824, , 1],
      ['Gale Woods Farm<br/>7210 County Rd 110 W, Minnetrista, MN 55364', 44.928539, -93.7067538, 1],
      ['Silverwood Park<br/>2500 County Road E, St Anthony, MN 55421', 45.047801, -93.2253147, 1],
      ['Carver Park Reserve<br/>7025 Victoria Dr, Victoria, MN 55386', 44.8744773, -93.715238, 1],
      ['Luce Line Regional Trail', 44.9890271, -93.4880774, 1],
      ['Shingobee Recreation Area<br/>MN-34, Walker, MN 56484', 47.037, -94.6461887, 1],
      ['Pillsbury State Forest', 46.4194102, -94.44376, 1],
      ['Saint Croix State Forest<br/>Sandstone Township, MN 55072', 46.0881593, -92.4163102, 1],
      ['Glacial Lakes<br/>25022 Co Rd 41, Starbuck, MN 56381', 45.5412741, -95.5334579, 1],
      ['Sherburne National Wildlife Refuge, Prairie&#39;s Edge Trail<br/>17076 293rd Ave, Zimmerman, MN 55398', 45.4839208, -93.7138763, 1],
      ['Sand Dunes State Forest, Ann Lake<br/>Big Lake, MN 55309', 45.4052809, -93.6674985, 1],
      ['Crow-Hassan Park Reserve<br/>12595 Park Dr, Rogers, MN 55374', 45.1900106, -93.6400207, 1],
      ['Rum River North County Park<br/>23100 Rum River Blvd NW, St Francis, MN 55070', 45.3906954, -93.3561888, 1],
      ['Rum River Central Regional Park<br/>17955 Roanoke St NW, Ramsey, MN 55303', 45.2940678, -93.383871, 1],
      ['Bunker Hills Regional Park<br/>Coon Rapids, MN 55448', 45.2092788, -93.2881347, 1],
      ['Coon Rapids Dam', 45.1435857, -93.3140684, 1],
      ['Tamarack Nature Center<br/>5287 Otter Lake Road, White Bear Township, MN 55110', 45.101349, -93.0408713, 1],
      ['Snail Lake<br/>4191 Snail Lake Blvd, Shoreview, MN 55126', 45.0679921, -93.1246948, 1],
      ['Pine Point Regional Park Trail<br/>11900 Norell Ave N, Stillwater, MN 55028', 45.1201067, -92.8415727, 1],
      ['Lake Rebecca Park Reserve<br/>9831 Rebecca Park Trail, Rockford, MN 55373', 45.0718651, -93.7591031, 1],
      ['Wolsfeld Woods Scientific Natural Area (SNA)<br/>6th Ave N, Long Lake, MN 55356', 45.00265, -93.5729877, 1],
      ['Clifton E. French Regional Park<br/> 12605 Rockford Rd, Plymouth, MN 55441', 45.0245816, -93.43843, 1],
      ['Lake Elmo Park Reserve, Eagle Point Lake<br/>1515 Keats Ave N, Lake Elmo, MN 55042', 44.9707263, -92.9053433, 1],
      ['Carver Park Reserve/Lowry Nature Center, Tamarack Trail<br/>7025 Victoria Dr, Victoria, MN 55386', 44.8784684, -93.7070288, 1],
      ['Baylor Regional Park<br/>10775 County Rd 33, Norwood Young America, MN 55397', 44.8103777, -93.9426273, 1],
      ['Bryant Lake<br/>6800 Rowland Rd, Eden Prairie, MN 55344', 44.8844508, -93.4330949, 1],
      ['Hyland Lake Park Reserve<br/>10145 Bush Lake Rd, Bloomington, MN 55438', 44.8248275, -93.3739011, 1],
      ['City Lakes Chain, Lake Harriet, Lake Calhoun, Lake Isles', 0, 0, 1],
      ['Wood Lake Nature Center<br/>6710 Lakeshore Dr, Minneapolis, MN 55423', 44.8770706, -93.2952699, 1],
      ['Lake Nokomis', 44.9086971, -93.2511585, 1],
      ['Thompson County Park, Thompson Trail<br/>360 Butler Avenue East, West St Paul, MN 55118', 44.9082944, -93.0706532, 1],
      ['Crosby Farm Park<br/>2595 Crosby Farm Rd, St Paul, MN 55116', 44.897501, -93.1681397, 1],
      ['Spring Lake Park Reserve, Schaar&#39;s Bluff Trail<br/>8500 127th St E, Hastings, MN 55033', 44.7660229, -92.9361167, 1],
      ['Cleary Lake Regional Park<br/>18106 Texas Ave, Prior Lake, MN 55372', 44.6807351, -93.3990422, 1],
      ['Minnesota Valley State Recreation Area, Lawrence Trail<br/>19825 Park Blvd, Jordan, MN 55352', 44.664043, -93.7101632, 1],
      ['Douglas State Trail', 44.1274241, -92.5908243, 1],
      ['Wild Indigo Scientific Natural Area<br/>580th Ave, Austin, MN 55912', 43.736951, -92.8562877, 1],
      ['Myre Big Island State Park<br/>19499 780th Ave, Albert Lea, MN 56007', 43.6371566, -93.3111221, 1],
      ['Beaver Creek Valley State Park<br/>15954 County Rd 1, Caledonia, MN 55921', 43.6445075, -91.5811443, 1],
      ['Brightsdale Unit, R.J. Dorer Memorial Hardwood Forest<br/>Hay Creek Township, MN 55066', 44.5235779, -92.4444959, 1],
      ['Pipestone National Monument<br/>36 Reservation Ave, Pipestone, MN 56164', 44.0133131, -96.3275067, 1],*/
    ];

    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: new google.maps.LatLng(44.9423189, -93.3931678),
        zoom: 10,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: [
                google.maps.MapTypeId.ROADMAP,
                google.maps.MapTypeId.TERRAIN,
                google.maps.MapTypeId.HYBRID
            ]
        },
        scrollwheel: false
    });
    var bikeLayer = new google.maps.BicyclingLayer();
    var iconBase = '/images/icon-marker.png';
    var infowindow = new google.maps.InfoWindow();
    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: iconBase
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

    //Reset Location on anchor click
    function pan(latlon) {
        var coords = latlon.split(',');
        var panPoint = new google.maps.LatLng(coords[0], coords[1]);

        map.panTo(panPoint)
    }

    /*    $('.location a, .locations a').click(function () {
            //        alert($(this).data('location'));
            pan($(this).data('location'));
        });
    */

    $('#locations').change(function () {
        pan($(this).val());
    });

    var styles = [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e9e9e9"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 60
                },
                {
                    "weight": 0.31
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#333333"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        }
    ];

    bikeLayer.setMap(map);
    map.setOptions({ styles: styles });


}
