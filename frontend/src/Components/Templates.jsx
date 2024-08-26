import React from 'react'
import { Document, Page, Text, View, StyleSheet} from '@react-pdf/renderer';

const date = new Date()
const dateToday = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
const styles = StyleSheet.create({
  page: {
    margin : 10,
    textAlign : 'justify',
    display :'flex',
    padding : 40
  },

  section : {
    display : 'flex',
    flexDirection: 'column',
    flexWrap : 'wrap'
  },

  title : {
    marginBottom : 24,
    textAlign : 'center',
    fontSize: 24,
    fontWeight: 700
  },

  heading : {
    marginTop : 14,
    marginBottom : 8,
    textDecoration: 'underline',
    fontSize: 14,
    fontWeight: 600
  },

  term : { 
    wordBreak: 'break-word',
    fontSize: 12,
    margin: '8px 0',
    lineHeight : 1.5
  },
  

  filler : {
    textAlign : 'justify',
    fontWeight: 600,
  }

})

const NonDisclosureAgreement = (props) => {
    const {data} = props 

  return (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
      <Text style={styles.title}>NON DISCLOSURE AGREEMENT</Text>
        <Text style={styles.heading}>PARTIES</Text>
        <Text style = {styles.term}> -This Non-Disclosure Agreement &#40;hereinafter referred to as the "Agreement"&#41; is entered into on <Text style = {styles.filler}>{data['date'] ? data['date'] :'________'}</Text> &#40; the"Effective Date"&#41;, by and between <Text style = {styles.filler}>{data['disclosing-party' ] ? data['disclosing-party'] :'____________'}</Text>, with an address of <Text style = {styles.filler}>{data['disclosing-party-address']?data['disclosing-party-address']:'_________'}</Text>&#40;hereinafter referred to as the "Disclosing Party"&#41; and <Text style = {styles.filler} >{data['receiving-party']?data['receiving-party']:'________'}</Text>, with an address of <Text style = {styles.filler}>{data['receiving-party-address']?data['receiving-party-address']:'__________'}</Text>,&#40;hereinafter referred to as the "Receiving Party"&#41; &#40;collectively referred to as the "Parties"&#41;.</Text>
        <Text style={styles.heading}>CONFIDENTIAL INFORMATION</Text>
        <Text style = {styles.term}>- The Receiving Party agrees not to disclose, copy, clone or modify any confidential information related to the disclosing Party and agrees not to use such information without obtaining consent.</Text>
        <Text style = {styles.term}>- "Confidential information" refers to any data and/or information that is related to the Disclosing Party, in any form including, but not limited to, oral or written. Such confidential information includes, but is not limited to, any information related to the business or industry of the Disclosing Party, such as discoveries, process, techniques, programs, knowledge, bases, customer lists, potentail customer, business partners, affiliated partners, leads, know-how, or any other servies related to Disclosing Party.</Text>
        <Text style={styles.heading}>RETURN OF CONFIDENTAL INFORMATION</Text>
        <Text style={styles.term}>- The Receiving Party agrees to return all the confidential information to the Disclosing Party upon the termination of this agreement.</Text>
        <Text style={styles.heading}>OWNERSHIP</Text>
        <Text style={styles.term}>- This Agreement is not transferable and may not only be transferred by written consent provided by both Parties.</Text>
        <Text style={styles.heading}>GOVERNING LAW</Text>
        <Text style={styles.term}>- This Agreement shall be governed by and constructed in accordance with the laws of<Text style={styles.filler}>{data['governing-law']?data['governing-law']:' ________'}</Text>.</Text>
        <Text style={styles.heading}>SIGNATURE AND DATE</Text>
        <Text style={styles.term}>The Parties herby agree to the terms and conditions set forth in this Agreement and such is demonstrated by their signature below:</Text>
        <Text style = {styles.term}>Disclosing Party Sign : <Text style = {styles.filler}>{data['sign1']}</Text></Text>
        <Text style = {styles.term}>Receiving Party Sign : <Text style = {styles.filler}>{data['sign2']}</Text></Text>
        <Text style = {styles.term}>Date : <Text style = {styles.filler}>{dateToday}</Text></Text>
      </View>
    </Page>
  </Document>
  )
}

const PaymentAgreement = (props) => {
  const {data} = props 

return (
  <Document>
  <Page size="A4" style={styles.page}>
    <View style={styles.section}>
    <Text style={styles.title}>PAYMENT AGREEMENT</Text>
      <Text style={styles.heading}>PARTIES</Text>
      <Text style = {styles.term}> -This Payment Agreemen &#40;hereinafter referred to as the “Agreement”&#41; is entered into on <Text style = {styles.filler}>{data['date'] ? data['date'] :'________'}</Text> &#40; the"Effective Date"&#41;, by and between <Text style = {styles.filler}>{data['debtor-name' ] ? data['debtor-name'] :'____________'}</Text>, with an address of <Text style = {styles.filler}>{data['debtor-address']?data['debtor-address']:'_________'}</Text>&#40;hereinafter referred to as the "Debtor"&#41; and <Text style = {styles.filler} >{data['creditor-name']?data['creditor-name']:'________'}</Text>, with an address of <Text style = {styles.filler}>{data['creditor-address']?data['creditor-address']:'__________'}</Text>,&#40;hereinafter referred to as the "Creditor"&#41; &#40;collectively referred to as the "Parties"&#41;.</Text>
      <Text style={styles.heading}>AGREEMENT</Text>
      <Text style = {styles.term}>- The Parties agree that the Debtor is to pay the Creditor an amount of <Text style={styles.filler}>{data['amount']?data['amount']:' ________'}</Text>.</Text>
      <Text style = {styles.term}>- The Parties agree to secure the amount of debt by entering into a new agreement where the amount of <Text style={styles.filler}>{data['amount']?data['amount']:' ________'}</Text> mentioned above is to be set into a structured payment agreement according to the terms and conditions provided below.</Text>
      <Text style={styles.heading}>DEBTOR REPRESENTATION</Text>
      <Text style={styles.term}>- The Debtor warrants as well as represents that the Parties have agreed upon a payment plan to secure the deficiency in a scheduled manner as set forth in this Agreement.</Text>
      <Text style={styles.heading}>PAYMENT PLAN</Text>
      <Text style={styles.term}>- The Parties agree to establish the payment plan as follows:</Text>
      <Text style={styles.term}> {data['payment-details']?data['payment-details'] :'____________________________________________________'}</Text>
      <Text style={styles.heading}>DEFAULT</Text>
      <Text style={styles.term}>- In case the Debtor fails to provide the payments as per the payment plan within a reasonable time, the Creditor becomes entitled to declare the remaining amount and the present Interest, if any, immediately due and payable.</Text>
      <Text style={styles.heading}>GOVERNING LAW</Text>
      <Text style={styles.term}>- This Agreement shall be governed by and constructed in accordance with the laws of <Text style={styles.filler}>{data['governing-law']?data['governing-law']:' ________'}</Text>.</Text>
      <Text style={styles.heading}>SEVERABILITY</Text>
      <Text style={styles.term}>If any provision of this Agreement is found to be unenforceable or invalid, the remaining provisions shall be enforced to the fullest extent permitted by law.</Text>
      
      <Text style = {styles.term}>Date : <Text style = {styles.filler}>{dateToday}</Text></Text>
    </View>
  </Page>
</Document>
)
}
const ReferralAgreement = (props) => {
  const {data} = props 

return (
  <Document>
  <Page size="A4" style={styles.page}>
    <View style={styles.section}>
    <Text style={styles.title}>REFERRAL AGREEMENT</Text>
      <Text style={styles.heading}>PARTIES</Text>
      <Text style = {styles.term}> -This Referral Agreement &#40;hereinafter referred to as the “Agreement”&#41; is entered into on <Text style = {styles.filler}>{data['date'] ? data['date'] :'________'}</Text> &#40; the"Effective Date"&#41;, by and between <Text style = {styles.filler}>{data['referrer-name' ] ? data['referrer-name'] :'____________'}</Text>, with an address of <Text style = {styles.filler}>{data['referrer-address']?data['referrer-address']:'_________'}</Text>&#40;hereinafter referred to as the "Referrer"&#41; and <Text style = {styles.filler} >{data['seller-name']?data['seller-name']:'________'}</Text>, with an address of <Text style = {styles.filler}>{data['seller-address']?data['seller-address']:'__________'}</Text>,&#40;hereinafter referred to as the "Seller"&#41; &#40;collectively referred to as the "Parties"&#41;.</Text>
      <Text style = {styles.term}>- The Seller is in the business of <Text style={styles.filler}>{data['seller-business']?data['seller-business']:' ________'}</Text>.</Text>
      <Text style = {styles.term}>- The Referrer has contacts with <Text style={styles.filler}>{data['referrer-contacts']?data['referrer-contacts']:' ________'}</Text> and has agreed to act as an intermediary finder of clients for the Seller and his/her services.</Text>
      <Text style={styles.heading}>TERM</Text>
      <Text style = {styles.term}>- This Agreement shall be effective on the date of signing this Agreement &#40;hereinafter referred to as the “Effective Date”&#41; and will end on <Text style={styles.filler}>{data['term-of-agreement']?data['term-of-agreement']:' ________'}.</Text>.</Text>
      <Text style = {styles.term}>- Upon the end of the term of the Agreement, this Agreement will not be automatically renewed for a new term.</Text>
      <Text style={styles.heading}>TERMINATION</Text>
      <Text style={styles.term}>- This Agreement may be terminated in case the following occurs:</Text>
      <Text style={styles.term}>  - Immediately in case one of the Parties breaches this Agreement.</Text>
      <Text style={styles.term}>  - At any given time by providing a written notice to the other party <Text style={styles.filler}>{data['termination-notice-period']?data['termination-notice-period']:' ________'}</Text> days prior to terminating the Agreement.</Text>
      <Text style={styles.heading}>RELATIONSHIP BETWEEN PARTIES</Text>
      <Text style={styles.term}>- Hereby, the Parties agree that the Referrer in this Agreement is an independent contractor where the Referrer provides the services hereunder and acts as an independent contractor.</Text>
      <Text style={styles.term}>- Under no circumstances shall the Referrer be considered an employee.</Text>
      <Text style={styles.term}>- Whereas, this Agreement does not create any other partnership between the Parties.</Text>
      <Text style={styles.heading}>PAYMENT AND FEES</Text>
      <Text style={styles.term}>- The Parties agree that the Referrer will receive <Text style={styles.filler}>{data['commission']?data['commission']:' ________'}</Text> commission per referral.</Text>
      <Text style={styles.term}>- The Parties agree that the Referrer will provide an invoice to the Seller every <Text style={styles.filler}>{data['invoice-frequency']?data['invoice-frequency']:' ________'}</Text> days/months for the Services he/she completes.</Text>
      <Text style = {styles.term}>Date : <Text style = {styles.filler}>{dateToday}</Text></Text>
    </View>
  </Page>
</Document>
)
}


const RentalAgreement = (props) => {
  const {data} = props 

return (
  <Document>
  <Page size="A4" style={styles.page}>
    <View style={styles.section}>
    <Text style={styles.title}>RENTAL AGREEMENT</Text>
      <Text style={styles.heading}>PARTIES</Text>
      <Text style = {styles.term}> -This Rental Agreement &#40;hereinafter referred to as the “Agreement”&#41; is entered into on <Text style = {styles.filler}>{data['date'] ? data['date'] :'________'}</Text> &#40; the"Effective Date"&#41;, by and between <Text style = {styles.filler}>{data['renter-name' ] ? data['renter-name'] :'____________'}</Text>, with an address of <Text style = {styles.filler}>{data['renter-address']?data['renter-address']:'_________'}</Text>&#40;hereinafter referred to as the "Renter"&#41; and <Text style = {styles.filler} >{data['landlord-name']?data['landlord-name']:'________'}</Text>, with an address of <Text style = {styles.filler}>{data['landlord-address']?data['landlord-address']:'__________'}</Text>,&#40;hereinafter referred to as the "Landlord"&#41; &#40;collectively referred to as the "Parties"&#41;.</Text>
      
      <Text style={styles.heading}>CONSIDERATION</Text>
      <Text style = {styles.term}>- The Renter hereby agrees to pay the Landlord the amount of money mentioned in this Agreement to lease the property owned by the Landlord.</Text>
      <Text style={styles.heading}>TERM</Text>
      <Text style={styles.term}>- (Option 1) This Agreement shall be effective on the date of signing this Agreement &#40;hereinafter referred to as the “Effective Date”&#41; and will end on <Text style = {styles.filler}>{data['end-date'] ? data['end-date'] :'________'}</Text>.</Text>
      <Text style={styles.term}>- (Option 2) Upon the end of the term of the Agreement, this Agreement will not be automatically renewed for a new term.</Text>
       
      <Text style={styles.heading}>PREMISES, USE AND OCCUPANCY</Text>
      <Text style={styles.term}>- The premises that are to be rented by the Landlord are located at &#40;address&#41; <Text style = {styles.filler}>{data['place-address'] ? data['place-address'] :'________'}</Text>.</Text>
      <Text style={styles.term}>- The premises are to be used only for residential purposes and may be occupied only by the registered occupants.</Text>
      <Text style={styles.heading}>COSTS AND PAYMENT</Text>
      <Text style={styles.term}>- The monthly rent to be paid by the Renter to the Landlord is <Text style = {styles.filler}>{data['rent-pay'] ? data['rent-pay'] :'________'}</Text>.It is to be paid by the Renter before the first day of every month, such that the first rent payment is due on <Text style = {styles.filler}>{data['due-on'] ? data['due-on'] :'________'}</Text>.</Text>
      <Text style={styles.term}>- The method of payment preferred by both parties is <Text style={styles.filler}>{data['payment-method']?data['payment-method']:' ________'}</Text>.</Text>
      <Text style={styles.term}>- In the event of late payments made by the Renter, the Landlord is entitled to impose a <Text style={styles.filler}>{data['fine']?data['fine']:' ________'}</Text> fine as late fee.</Text>
      <Text style={styles.term}>- Prior to taking occupancy of the premises, the Renter will pay the Landlord an amount of <Text style={styles.filler}>{data['security-amount']?data['security-amount']:' ________'}</Text> as a security deposit to cover the cost of any damages suffered by the premises and cleaning. Such security deposit will be returned to the Renter upon the end of this Agreement, provided the premises are left in the same condition as prior to the occupancy.</Text>
      
      <Text style = {styles.term}>Date : <Text style = {styles.filler}>{dateToday}</Text></Text>
    </View>
  </Page>
</Document>
)
}

const SubleaseAgreement = (props) => {
  const {data} = props 

return (
  <Document>
  <Page size="A4" style={styles.page}>
    <View style={styles.section}>
    <Text style={styles.title}>SUBLEASE AGREEMENT</Text>
      <Text style={styles.heading}>PARTIES</Text>
      <Text style = {styles.term}> -This Sublease Contract Agreement  &#40;hereinafter referred to as the “Agreement”&#41; is entered into on <Text style = {styles.filler}>{data['date'] ? data['date'] :'________'}</Text> &#40; the"Effective Date"&#41;, by and between <Text style = {styles.filler}>{data['subtenant-name' ] ? data['subtenant-name'] :'____________'}</Text>, with an address of <Text style = {styles.filler}>{data['subtenant-address']?data['subtenant-address']:'_________'}</Text>&#40;hereinafter referred to as the "Subtenant"&#41; and <Text style = {styles.filler} >{data['sublessor-name']?data['sublessor-name']:'________'}</Text>, with an address of <Text style = {styles.filler}>{data['sublessor-address']?data['sublessor-address']:'__________'}</Text>,&#40;hereinafter referred to as the "Sublessor"&#41; &#40;collectively referred to as the "Parties"&#41;.</Text>
      
      <Text style={styles.heading}>PREMISES</Text>
      <Text style = {styles.term}>- The premises that are to be subleased are located at &#40;address&#41; <Text style = {styles.filler}>{data['subleased-premises'] ? data['subleased-premises'] :'________'}</Text>.</Text>
      <Text style={styles.heading}>PAYMENT AND COSTS</Text>
      <Text style={styles.term}>- The monthly rent to be paid is <Text style = {styles.filler}>{data['rent-pay'] ? data['rent-pay'] :'________'}</Text>. It is to be paid before the first day of every month, so that the first rent payment is due on <Text style = {styles.filler}>{data['due-on'] ? data['due-on'] :'________'}</Text>.</Text>
      <Text style={styles.term}>- The method of payment preferred by both parties is <Text style={styles.filler}>{data['payment-method']?data['payment-method']:' ________'}</Text>.</Text>       
      <Text style={styles.heading}>UTILITIES</Text>
      <Text style={styles.term}>- Hereby, both parties agree that the Subtenant is responsible for paying all the utilities or other charges associated with the Premises.</Text>
      <Text style={styles.heading}>DEPOSIT</Text>
      <Text style={styles.term}>- Prior to taking the occupancy of the premises, the Subtenant will pay the Sublessor an amount of <Text style={styles.filler}>{data['security-amount']?data['security-amount']:' ________'}</Text> as a security deposit to cover the cost of any damages suffered by the premises and cleaning. Such security deposit will be returned to the Subtenant upon the end of this Agreement, provided that the premises are left in the same condition as prior to the occupancy.</Text>
      <Text style={styles.heading}>INSURANCE</Text>
      <Text style={styles.term}>- The Subtenant is to arrange renter&rsquo;s insurance that meets the minimum standards required under the Sublessor&rsquo;s original lease.</Text>
      <Text style={styles.heading}>TERM</Text>
      <Text style={styles.term}>- This Agreement shall be effective on the date of signing this Agreement &#40;hereinafter referred to as the “Effective Date”&#41; and will end on <Text style = {styles.filler}>{data['end-date'] ? data['end-date'] :'________'}</Text>.</Text>
             
     
      
      <Text style = {styles.term}>Date : <Text style = {styles.filler}>{dateToday}</Text></Text>
    </View>
  </Page>
</Document>
)
}







export { NonDisclosureAgreement,PaymentAgreement,ReferralAgreement,RentalAgreement,SubleaseAgreement};
