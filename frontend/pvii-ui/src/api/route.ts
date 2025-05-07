import { Resend } from 'resend';
import WelcomeEmail from '../emails/welcome';

const resend = new Resend('re_K8Y2aBjq_KGskGGNsGEpx9RM3SeteNz3o');

export async function GET() {
    await resend.emails.send({
        from: 'presidentvalet.ii@gmail.com',
        to: 'djkim.swe@gmail.com',
        subject: 'Hello Customer',
        react: WelcomeEmail({firstName: 'Tammy'})
    });

    return Response.json({
        status: 'OK'
    })
}