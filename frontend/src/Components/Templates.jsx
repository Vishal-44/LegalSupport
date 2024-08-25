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

export { NonDisclosureAgreement,PaymentAgreement};
