var config = {
    paths: {
        'jsPdf': 'GaussDev_PrintPdf/js/jsPDF/jspdf.js'
    },
    shim: {
        'jsPdf':{
            deps: [
                'GaussDev_PrintPdf/js/jsPDF/plugins/from_html.js',
                'GaussDev_PrintPdf/js/jsPDF/plugins/standard_fonts_metrics.js',
                'GaussDev_PrintPdf/js/jsPDF/plugins/split_text_to_size.js'
            ]
        }
    }
};
