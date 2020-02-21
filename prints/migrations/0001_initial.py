# Generated by Django 2.1.5 on 2020-02-21 15:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Print',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('picture', models.ImageField(upload_to='print_pictures/')),
                ('profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Prints', to='accounts.UserProfile')),
            ],
            options={
                'ordering': ['name'],
            },
        ),
        migrations.AlterUniqueTogether(
            name='print',
            unique_together={('profile', 'name')},
        ),
    ]
