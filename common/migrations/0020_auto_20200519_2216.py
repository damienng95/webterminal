# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2020-05-19 22:16
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0019_defautusersettings'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='DefautUserSettings',
            new_name='DefaultUserSettings',
        ),
    ]
