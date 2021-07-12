export const facilityType = [
    {'name': 'All Emitters'},
              {'name': 'Point Sources', 'child': true},
              {'name': 'Onshore Oil & Gas Production', 'child': true},
              {'name': 'Onshore Oil & Gas Gathering & Boosting', 'child': true},
              {'name': 'Local Distribution Companies', 'child': true},
              {'name': 'Onshore Gas Transmission Pipelines', 'child': true},
              {'name': 'SF6 from Elect. Dist. Systems', 'child': true},
          {'name': 'Suppliers', 'list': [
                  {'name': 'Coal-based Liquid Fuel Suppliers', 'list': [
                    {'name': 'Producers', 'child': true},
                    {'name': 'Local Distribution Companies', 'child': true}
                  ]},
                  {'name': 'Petroleum Product Suppliers'},
                  {'name': 'Natural Gas and Natural Gas Liquids Suppliers'}
          ]},
          {'name': 'CO2 Capture, Supply and Underground Injection'},
          {'name': 'Geologic Sequestration of CO2 (RR)'}
]