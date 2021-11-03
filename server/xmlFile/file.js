
const postRequest = `
    <AddPaymentLocal>
        <dto>
            <PaymentTransactions>
                <!--Zero or more repetitions:-->
                <PaymentTransactionLocal>
                    <DestinationBankCode>044</DestinationBankCode>
                    <Beneficiary> TEST USER</Beneficiary>
                    <AccountNumber>00000XXXXX </AccountNumber>
                    <Amount>1100</Amount>
                    <Narration ERP TEST2</Naration>
                    <ValueDate>2018-08-03</ValueDate>
                    <TransactionReference>TEST1234</TransactionReference>
                    <BeneficiaryEmail></BeneficiaryEmail>
                    <BeneficiaryPhone></BeneficiaryPhone>
                </PaymentTransactionLocal>
            </PaymentTransactions>
            <CorporateCode>XXX</CorporateCode>
            <Currency>NGN</Currency>
            <SingleDebitNaration></SingleDebitNaration>
            <EnableSingleDebit>0</EnableSingleDebit>
            <Date>2018-08-03</Date>
            <TotalTransactions>1</TotalTransactions>
            <SourceAccount>00000XXXXX </SourceAccount>
            <Amount>1100</Amount>
            <PaymentMethodId>1</PaymentMethodId>
            <PaymentTypeId>1</PaymentTypeId>
            <BatchReference>BATCHTest1100</BatchReference>
            <Username>XXX</Username>
            <Password>XXXX</Password>
        </dto>
    </AddPaymentLocal>
`

const postResponse = `
    <AddPaymentLocalResponse>
        <AddPaymentLocalResult>
            <CorporateCode>CorpXXXX</CorporateCode>
            <BatchReference>BATCHTest1100</BatchReference>
            <AccountNo>00000XXXXX </AccountNo>
            <StatusCode>200</StatusCode> <!-- ! changed the status code from [00] to [200] -->
            <StatusDescription>Successful</StatusDescription>
        </AddPaymentLocalResult>
    </AddPaymentLocalResponse>
`

const getRequest = `
    <GetAccountBalance>
        <request>
            <CorporateCode>CorpXXXXX</CorporateCode>
            <AccountNumber>00000XXXXX </AccountNumber>
        </request>
    </GetAccountBalance>
`

const getResponse = `
    <GetAccountBalanceResponse xmlns="http://tempuri.org/">
        <GetAccountBalanceResult>
            <CorporateCode>CorpXXX</CorporateCode>
            <AccountNumber>00000XXXXX</AccountNumber>
            <Balance>1051.42</Balance>
            <StatusCode>200</StatusCode> <!-- ! changed the status code from [00] to [200] -->
            <StatusDescription>SUCCESSFUL</StatusDescription>
        </GetAccountBalanceResult>
    </GetAccountBalanceResponse>
`

module.exports = {
    getResponse,
    getRequest,
    postResponse,
    postRequest
}