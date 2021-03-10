Input Data

You are given a list of bank accounts in the following format:

[
  {
    institution_number: '001',
    transit_number: '12345',
    account_number: '1342237'
  },
  {
    institution_number: '004',
    transit_number: '34533',
    account_number: '1212347'
  },
  {
    institution_number: '004',
    transit_number: '35673',
    account_number: '7433453'
  },
  {
    institution_number: '010',
    transit_number: '30800',
    account_number: '9054343'
  }
]

You are also given a list of eligible institutions in the following format:

[
  {
    institution_name: 'BMO',
    institution_number: '001',
  },
  {
    institution_name: 'CIBC',
    institution_number: '010'
  },
  {
    institution_name: 'Simplii',
    institution_number: '010',
    transit_numbers: ['30800']
  },
  {
    institution_name: 'TD',
    institution_number: '004'
  }
]

Output Data

You must output a list of eligible institutions that the client has bank accounts at. With the example data, the output should be:

['BMO', 'TD', 'Simplii']

The client does not bank with CIBC, because the only bank account with institution number '010' owned by the client has the transit number '30800', which belongs to Simplii.

Considerations

Keep in mind that there may be more than two institutions that share the same institution_number, and there may be institutions that are identified by more than just one transit_number. 

The most important goal here is to cover all edge cases. Make sure to test your code thoroughly.


```
const accountList = [
    {
      institution_number: '001',
      transit_number: '12345',
      account_number: '1342237'
    },
    {
      institution_number: '004',
      transit_number: '34533',
      account_number: '1212347'
    },
    {
      institution_number: '004',
      transit_number: '35673',
      account_number: '7433453'
    },
    {
      institution_number: '010',
      transit_number: '30800',
      account_number: '9054343'
    }
];

const institutions = [
    {
      institution_name: 'BMO',
      institution_number: '001',
    },
    {
      institution_name: 'CIBC',
      institution_number: '010'
    },
    {
      institution_name: 'Simplii',
      institution_number: '010',
      transit_numbers: ['30800']
    },
    {
      institution_name: 'TD',
      institution_number: '004'
    }
  ]

const foundInstitution = (accountList, institutions) => {
    if (!Array.isArray(accountList) || accountList.length < 1) {
        return [];
    }

    return accountList.map((account) => {
        const candidates = institutions.filter((institution) => {
            return institution.institution_number === account.institution_number;
        });

        if (candidates.length <= 1) {
            return candidates[0].institution_name;
        }
        
        const noTransitNumbers = candidates.filter((item) => !item.transit_numbers);
        const withTransitNumbers = candidates.find((item) => {
            return item.transit_numbers && item.transit_numbers.indexOf(account.transit_number) > -1
        });

        if (withTransitNumbers) {
            return withTransitNumbers.institution_name;
        }

        if (noTransitNumbers.length === 0) {
            return noTransitNumbers[0];
        }

        return noTransitNumbers.map(item => item.institution_name).join('/')
    });
}

console.log(foundInstitution(accountList, institutions));
```
